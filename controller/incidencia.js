/**
 * Created by hector on 02/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Incidencia = require('../model/incidencia').Incidencia,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todas los incidencias',
    tags: ['api', 'incidencia'],
    handler: function (request, reply) {
        Incidencia.find({}, function (err, locales) {
            if (!err) {
                return reply(locales);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar incidencia por id',
    tags: ['api', 'incidencia'],
    validate: {
        params: {
            idIncidencia: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Incidencia.findOne({
            '_id': request.params.idIncidencia
        }, function (err, incidencia) {
            if (!err)
                return reply(incidencia);
            return reply(Boom.badImplementation(err));//500 error
        });
    }
};

exports.getByEmpresa = {
    // TODO: Implementar busqueda de locales por empresa
    // TODO: Implementar busqueda de locales por empresa
    handler: function (request, reply) {
        // TODO: Implementar búsqueda de ficheros por empresa.
        return reply(Boom.notImplemented("Función no implementada.", ""));
    }
}

exports.create = {
    description: 'Crear una incidencia',
    tags: ['api', 'incidencia'],
    validate: {},
    handler: function (request, reply) {
        let incidencia = new Incidencia(request.payload);
        incidencia.save(function (err, incidencia) {
            if (!err)
                return reply(incidencia).created('/incidencia/' + incidencia.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador de incidencia actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos de la incidencia.',
    tags: ['api', 'incidencia'],
    validate: {
        params: {
            idIncidencia: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Incidencia.findOneAndUpdate({
            '_id': request.params.idIncidencia
        }, request.payload, function (err, incidencia) {
            if (!err)
                return reply(incidencia);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina una incidencia',
    tags: ['api', 'incidencia'],
    validate: {
        params: {idIncidencia: Joi.string().required()}
    },
    handler: function (request, reply) {
        Incidencia.findOneAndRemove({
            '_id': request.params.idIncidencia
        }, function (err) {
            if (!err)
                return reply("Incidencia eliminada correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todas las incidencias',
    tags: ['api', 'incidencia'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('incidencia', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}


