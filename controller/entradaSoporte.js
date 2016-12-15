/**
 * Created by hector on 02/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    EntradaSoporte = require('../model/entradaSoporte').EntradaSoporte,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los registros de entradas de soporte',
    tags: ['api', 'entradaSoporte'],
    handler: function (request, reply) {
        EntradaSoporte.find({}, function (err, locales) {
            if (!err) {
                return reply(locales);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar registro de entrada de soporte por id',
    tags: ['api', 'entradaSoporte'],
    validate: {
        params: {
            idEntradaSoporte: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        EntradaSoporte.findOne({
            '_id': request.params.idEntradaSoporte
        }, function (err, entradaSoporte) {
            if (!err)
                return reply(entradaSoporte);
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
    description: 'Crear un registro de entrada de soporte',
    tags: ['api', 'entradaSoporte'],
    validate: {},
    handler: function (request, reply) {
        let entradaSoporte = new EntradaSoporte(request.payload);
        entradaSoporte.save(function (err, entradaSoporte) {
            if (!err)
                return reply(entradaSoporte).created('/entradaSoporte/' + entradaSoporte.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador del registro de personal autorizado actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del registro de entrada de soporte.',
    tags: ['api', 'entradaSoporte'],
    validate: {
        params: {
            idEntradaSoporte: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        EntradaSoporte.findOneAndUpdate({
            '_id': request.params.idEntradaSoporte
        }, request.payload, function (err, entradaSoporte) {
            if (!err)
                return reply(entradaSoporte);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un registro de entrada de soporte',
    tags: ['api', 'entradaSoporte'],
    validate: {
        params: {idEntradaSoporte: Joi.string().required()}
    },
    handler: function (request, reply) {
        EntradaSoporte.findOneAndRemove({
            '_id': request.params.idEntradaSoporte
        }, function (err) {
            if (!err)
                return reply("Registro de entrada de soporte eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los registros de entrada de soportes',
    tags: ['api', 'entradaSoporte'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('entradaSoporte', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}


