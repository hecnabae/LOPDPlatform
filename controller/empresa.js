/**
 * Created by hector on 24/11/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Empresa = require('../model/empresa').Empresa,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todas las empresas',
    tags: ['api', 'empresa'],
    handler: function (request, reply) {
        Empresa.find({}, function (err, empresas) {
            if (!err) {
                return reply(empresas);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar empresa por id',
    tags: ['api', 'empresa'],
    validate: {
        params: {
            idEmpresa: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Empresa.findOne({
            '_id': request.params.idEmpresa
        }, function (err, empresa) {
            if (!err)
                return reply(empresa);
            return reply(Boom.badImplementation(err));//500 error
        });
    }
};

exports.create = {
    description: 'Crear una empresa',
    tags: ['api', 'empresa'],
    validate: {},
    handler: function (request, reply) {
        let empresa = new Empresa(request.payload);
        empresa.save(function (err, empresa) {
            if (!err)
                return reply(empresa).created('/empresa/' + empresa.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador de empresa actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos de la empresa.',
    tags: ['api', 'empresa'],
    validate: {
        params: {
            idEmpresa: Joi.string().required()
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
    description: 'Elimina una empresa',
    tags: ['api', 'empresa'],
    validate: {
        idEmpresa: Joi.string().required()
    },
    handler: function (request, reply) {
        Empresa.findOneAndRemove({
            '_id': request.params.idEmpresa
        }, function (err) {
            if (!err)
                return reply("Empresa eliminada correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todas las empresas',
    tags: ['api', 'empresa'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('empresa', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}

