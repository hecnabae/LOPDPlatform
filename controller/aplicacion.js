/**
 * Created by hector on 01/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Aplicacion = require('../model/aplicacion').Aplicacion,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todas los aplicaciones',
    tags: ['api', 'aplicacion'],
    handler: function (request, reply) {
        Aplicacion.find({}, function (err, aplicaciones) {
            if (!err) {
                return reply(aplicaciones);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar aplicacion por id',
    tags: ['api', 'aplicacion'],
    validate: {
        params: {
            idAplicacion: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Aplicacion.findOne({
            '_id': request.params.idAplicacion
        }, function (err, aplicacion) {
            if (!err)
                return reply(aplicacion);
            return reply(Boom.badImplementation(err));//500 error
        });
    }
};

exports.getByEmpresa = {
    // TODO: Implementar busqueda de locales por empresa
    handler: function (request, reply) {
        // TODO: Implementar búsqueda de ficheros por empresa.
        return reply(Boom.notImplemented("Función no implementada.", ""));
    }
}

exports.create = {
    description: 'Crear una aplicacion',
    tags: ['api', 'aplicacion'],
    validate: {},
    handler: function (request, reply) {
        let aplicacion = new Aplicacion(request.payload);
        aplicacion.save(function (err, aplicacion) {
            if (!err)
                return reply(aplicacion).created('/aplicacion/' + aplicacion.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador de aplicacion actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos de la aplicacion.',
    tags: ['api', 'aplicacion'],
    validate: {
        params: {
            idAplicacion: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Aplicacion.findOneAndUpdate({
            '_id': request.params.idAplicacion
        }, request.payload, function (err, aplicacion) {
            if (!err)
                return reply(aplicacion);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina una aplicacion',
    tags: ['api', 'aplicacion'],
    validate: {
        params: {
            idAplicacion: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Aplicacion.findOneAndRemove({
            '_id': request.params.idAplicacion
        }, function (err) {
            if (!err)
                return reply("Aplicacion eliminada correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todas las aplicaciones',
    tags: ['api', 'aplicacion'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('aplicacion', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}




