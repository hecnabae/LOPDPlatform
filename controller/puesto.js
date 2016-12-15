/**
 * Created by hector on 02/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Puesto = require('../model/puesto').Puesto,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los puestos',
    tags: ['api', 'puesto'],
    handler: function (request, reply) {
        Puesto.find({}, function (err, puestos) {
            if (!err) {
                return reply(puestos);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar puesto por id',
    tags: ['api', 'puesto'],
    validate: {
        params: {
            idPuesto: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Local.findOne({
            '_id': request.params.idLocal
        }, function (err, local) {
            if (!err)
                return reply(local);
            return reply(Boom.badImplementation(err));//500 error
        });
    }
};

exports.getByEmpresa = {
    // TODO: Implementar busqueda de locales por empresa
}

exports.create = {
    description: 'Crear un local',
    tags: ['api', 'local'],
    validate: {},
    handler: function (request, reply) {
        let local = new Local(request.payload);
        local.save(function (err, local) {
            if (!err)
                return reply(local).created('/local/' + local.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador de local actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del local.',
    tags: ['api', 'local'],
    validate: {
        params: {
            idLocal: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Local.findOneAndUpdate({
            '_id': request.params.idLocal
        }, request.payload, function (err, local) {
            if (!err)
                return reply(local);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un local',
    tags: ['api', 'local'],
    validate: {
        idLocal: Joi.string().required()
    },
    handler: function (request, reply) {
        Local.findOneAndRemove({
            '_id': request.params.idLocal
        }, function (err) {
            if (!err)
                return reply("Local eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los locales',
    tags: ['api', 'local'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('local', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}

