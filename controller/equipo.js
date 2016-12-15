/**
 * Created by hector on 01/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Equipo = require('../model/equipo').Equipo,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los equipos',
    tags: ['api', 'equipo'],
    handler: function (request, reply) {
        Equipo.find({}, function (err, equipos) {
            if (!err) {
                return reply(equipos);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar equipo por id',
    tags: ['api', 'equipo'],
    validate: {
        params: {
            idEquipo: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Equipo.findOne({
            '_id': request.params.idEquipo
        }, function (err, equipo) {
            if (!err)
                return reply(equipo);
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
    description: 'Crear un equipo',
    tags: ['api', 'equipo'],
    validate: {},
    handler: function (request, reply) {
        let equipo = new Equipo(request.payload);
        equipo.save(function (err, equipo) {
            if (!err)
                return reply(equipo).created('/equipo/' + equipo.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador de equipo actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del equipo.',
    tags: ['api', 'equipo'],
    validate: {
        params: {
            idEquipo: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Equipo.findOneAndUpdate({
            '_id': request.params.idEquipo
        }, request.payload, function (err, equipo) {
            if (!err)
                return reply(equipo);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un equipo',
    tags: ['api', 'equipo'],
    validate: {
        params: {
            idEquipo: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Equipo.findOneAndRemove({
            '_id': request.params.idEquipo
        }, function (err) {
            if (!err)
                return reply("Equipo eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los equipos',
    tags: ['api', 'equipo'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('equipo', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}



