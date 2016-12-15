/**
 * Created by hector on 02/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    SalidaSoporte = require('../model/salidaSoporte').SalidaSoporte,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los registros de salidas de soporte',
    tags: ['api', 'salidaSoporte'],
    handler: function (request, reply) {
        SalidaSoporte.find({}, function (err, locales) {
            if (!err) {
                return reply(locales);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar registro de salida de soporte por id',
    tags: ['api', 'salidaSoporte'],
    validate: {
        params: {
            idSalidaSoporte: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        SalidaSoporte.findOne({
            '_id': request.params.idSalidaSoporte
        }, function (err, salidaSoporte) {
            if (!err)
                return reply(salidaSoporte);
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
    description: 'Crear un registro de salida de soporte',
    tags: ['api', 'salidaSoporte'],
    validate: {},
    handler: function (request, reply) {
        let salidaSoporte = new SalidaSoporte(request.payload);
        salidaSoporte.save(function (err, salidaSoporte) {
            if (!err)
                return reply(salidaSoporte).created('/salidaSoporte/' + salidaSoporte.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador del registro de personal autorizado actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del registro de salida de soporte.',
    tags: ['api', 'salidaSoporte'],
    validate: {
        params: {
            idSalidaSoporte: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        SalidaSoporte.findOneAndUpdate({
            '_id': request.params.idSalidaSoporte
        }, request.payload, function (err, salidaSoporte) {
            if (!err)
                return reply(salidaSoporte);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un registro de salida de soporte',
    tags: ['api', 'salidaSoporte'],
    validate: {
        params: {idSalidaSoporte: Joi.string().required()}
    },
    handler: function (request, reply) {
        SalidaSoporte.findOneAndRemove({
            '_id': request.params.idSalidaSoporte
        }, function (err) {
            if (!err)
                return reply("Registro de salida de soporte eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los registros de salida de soportes',
    tags: ['api', 'salidaSoporte'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('salidaSoporte', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}
