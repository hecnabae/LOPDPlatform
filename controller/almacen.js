/**
 * Created by hector on 01/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Almacen = require('../model/almacen').Almacen,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los almacenes',
    tags: ['api', 'almacen'],
    handler: function (request, reply) {
        Almacen.find({}, function (err, almacenes) {
            if (!err) {
                return reply(almacenes);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar almacen por id',
    tags: ['api', 'almacen'],
    validate: {
        params: {
            idAlmacen: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Almacen.findOne({
            '_id': request.params.idAlmacen
        }, function (err, almacen) {
            if (!err)
                return reply(almacen);
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
    description: 'Crear un almacen',
    tags: ['api', 'almacen'],
    validate: {},
    handler: function (request, reply) {
        let almacen = new Almacen(request.payload);
        almacen.save(function (err, local) {
            if (!err)
                return reply(almacen).created('/almacen/' + almacen.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador de almacen actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del almacen.',
    tags: ['api', 'almacen'],
    validate: {
        params: {
            idAlmacen: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Almacen.findOneAndUpdate({
            '_id': request.params.idAlmacen
        }, request.payload, function (err, almacen) {
            if (!err)
                return reply(almacen);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un almacen',
    tags: ['api', 'almacen'],
    validate: {
        params: {
            idAlmacen: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Almacen.findOneAndRemove({
            '_id': request.params.idAlmacen
        }, function (err) {
            if (!err)
                return reply("Almacen eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los almacenes',
    tags: ['api', 'almacen'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('almacen', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}


