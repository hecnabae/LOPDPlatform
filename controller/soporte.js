/**
 * Created by hector on 02/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Soporte = require('../model/soporte').Soporte,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los soportes',
    tags: ['api', 'soporte'],
    handler: function (request, reply) {
        Soporte.find({}, function (err, locales) {
            if (!err) {
                return reply(locales);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar soporte por id',
    tags: ['api', 'soporte'],
    validate: {
        params: {
            idSoporte: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Soporte.findOne({
            '_id': request.params.idSoporte
        }, function (err, soporte) {
            if (!err)
                return reply(soporte);
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
    description: 'Crear un soporte',
    tags: ['api', 'soporte'],
    validate: {},
    handler: function (request, reply) {
        let soporte = new Soporte(request.payload);
        soporte.save(function (err, soporte) {
            if (!err)
                return reply(soporte).created('/soporte/' + soporte.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador del soporte actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del soporte.',
    tags: ['api', 'soporte'],
    validate: {
        params: {
            idSoporte: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Soporte.findOneAndUpdate({
            '_id': request.params.idSoporte
        }, request.payload, function (err, soporte) {
            if (!err)
                return reply(soporte);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un soporte',
    tags: ['api', 'soporte'],
    validate: {
        params: {idSoporte: Joi.string().required()}
    },
    handler: function (request, reply) {
        Soporte.findOneAndRemove({
            '_id': request.params.idSoporte
        }, function (err) {
            if (!err)
                return reply("Soporte eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los soportes',
    tags: ['api', 'soporte'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('soporte', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}


