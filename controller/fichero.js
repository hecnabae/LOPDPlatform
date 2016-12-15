/**
 * Created by hector on 29/11/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Fichero = require('../model/fichero').Fichero,
    Empresa = require('../model/empresa').Empresa,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los ficheros',
    tags: ['api', 'fichero'],
    handler: function (request, reply) {
        Fichero.find({}, function (err, ficheros) {
            if (!err) {
                return reply(ficheros);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar fichero por id',
    tags: ['api', 'fichero'],
    validate: {
        params: {
            idFichero: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Fichero.findOne({
            '_id': request.params.idFichero
        }, function (err, fichero) {
            if (!err)
                return reply(fichero);
            return reply(Boom.badImplementation(err));//500 error
        });
    }
};

exports.getByEmpresa = {
    // description: 'Buscar fichero por id de empresa',
    // tags: ['api', 'fichero', 'empresa'],
    // validate: {
    //     payload: {
    //         idEmpresa: Joi.string().required()
    //     }
    // },
    handler: function (request, reply) {
        // TODO: Implementar búsqueda de ficheros por empresa.
        return reply(Boom.notImplemented("Función no implementada.", ""));
        // Fichero.find({}, function (err, ficheros) {
        //     if (!err)
        //         return reply(ficheros);
        //     return reply(Boom.badImplementation(err));//500 error
        // });
    }
}

exports.create = {
    description: 'Crear un fichero',
    tags: ['api', 'fichero'],
    validate: {
        params: {
            idEmpresa: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        // TODO: Revisar que funcione (payload, params)
        Empresa.findOne({
            '_id': request.params.idEmpresa
        }, function (err, empresa) {
            if (!err) {
                let fichero = new Fichero(request.payload);
                fichero.save(function (err, fichero) {
                    if (!err)
                        return reply(fichero).created('/fichero/' + fichero.nombreFichero); // HTTP 201
                    if (11000 === err.code || 11001 === err.code)
                        return reply(Boom.forbidden("El identificador de fichero actual ya existe, por favor introduzca otro."));
                    return reply(Boom.forbidden(err)); // HTTP 403
                })
            }
            return reply(Boom.badImplementation(err));//500 error
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del fichero.',
    tags: ['api', 'fichero'],
    validate: {
        params: {
            idFichero: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Empresa.findOneAndUpdate({
            '_id': request.params.idEmpresa
        }, request.payload, function (err, empresa) {
            if (!err)
                return reply(empresa);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un fichero',
    tags: ['api', 'fichero'],
    validate: {
        params: {idFichero: Joi.string().required()}
    },
    handler: function (request, reply) {
        Fichero.findOneAndRemove({
            '_id': request.params.idFichero
        }, function (err) {
            if (!err)
                return reply("Fichero eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los ficheros',
    tags: ['api', 'fichero'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('fichero', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}

