/**
 * Created by hector on 02/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    Partner = require('../model/partner').Partner,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los partners',
    tags: ['api', 'partner'],
    handler: function (request, reply) {
        Partner.find({}, function (err, locales) {
            if (!err) {
                return reply(locales);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar partner por id',
    tags: ['api', 'partner'],
    validate: {
        params: {
            idPartner: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Partner.findOne({
            '_id': request.params.idPartner
        }, function (err, partner) {
            if (!err)
                return reply(partner);
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
    description: 'Crear un partner',
    tags: ['api', 'partner'],
    validate: {},
    handler: function (request, reply) {
        let partner = new Partner(request.payload);
        partner.save(function (err, partner) {
            if (!err)
                return reply(partner).created('/partner/' + partner.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador del partner actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del partner.',
    tags: ['api', 'partner'],
    validate: {
        params: {
            idPartner: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        Partner.findOneAndUpdate({
            '_id': request.params.idPartner
        }, request.payload, function (err, partner) {
            if (!err)
                return reply(partner);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un partner',
    tags: ['api', 'partner'],
    validate: {
        params: {idPartner: Joi.string().required()}
    },
    handler: function (request, reply) {
        Partner.findOneAndRemove({
            '_id': request.params.idPartner
        }, function (err) {
            if (!err)
                return reply("Partner eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los partners',
    tags: ['api', 'partner'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('partner', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}


