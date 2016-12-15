/**
 * Created by hector on 02/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    PersonalAutorizado = require('../model/personalAutorizado').PersonalAutorizado,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los registros de personal Autorizado',
    tags: ['api', 'personalAutorizado'],
    handler: function (request, reply) {
        PersonalAutorizado.find({}, function (err, locales) {
            if (!err) {
                return reply(locales);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar registro de personal autorizado por id',
    tags: ['api', 'personalAutorizado'],
    validate: {
        params: {
            idPersonalAutorizado: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        PersonalAutorizado.findOne({
            '_id': request.params.idPersonalAutorizado
        }, function (err, personalAutorizado) {
            if (!err)
                return reply(personalAutorizado);
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
    description: 'Crear un registro de personal autorizado',
    tags: ['api', 'personalAutorizado'],
    validate: {},
    handler: function (request, reply) {
        let personalAutorizado = new PersonalAutorizado(request.payload);
        personalAutorizado.save(function (err, personalAutorizado) {
            if (!err)
                return reply(personalAutorizado).created('/personalAutorizado/' + personalAutorizado.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador del registro de personal autorizado actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del registro de personal autorizado.',
    tags: ['api', 'personalAutorizado'],
    validate: {
        params: {
            idPersonalAutorizado: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        PersonalAutorizado.findOneAndUpdate({
            '_id': request.params.idPersonalAutorizado
        }, request.payload, function (err, personalAutorizado) {
            if (!err)
                return reply(personalAutorizado);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un registro de personal autorizado',
    tags: ['api', 'personalAutorizado'],
    validate: {
        params: {idPersonalAutorizado: Joi.string().required()}
    },
    handler: function (request, reply) {
        PersonalAutorizado.findOneAndRemove({
            '_id': request.params.idPersonalAutorizado
        }, function (err) {
            if (!err)
                return reply("Registro de personal autorizado eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los registros de personal Autorizado',
    tags: ['api', 'personalAutorizado'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('personalAutorizado', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}


