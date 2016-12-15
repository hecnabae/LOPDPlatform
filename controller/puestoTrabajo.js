/**
 * Created by hector on 02/12/2016.
 */
'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    PuestoTrabajo = require('../model/puestoTrabajo').PuestoTrabajo,
    mongoose = require('mongoose');

exports.getAll = {
    description: 'Obtiene todos los puestos de trabajo',
    tags: ['api', 'puestoTrabajo'],
    handler: function (request, reply) {
        PuestoTrabajo.find({}, function (err, locales) {
            if (!err) {
                return reply(locales);
            }
        });
    }
};

exports.getOne = {
    description: 'Buscar puesto de trabajo por id',
    tags: ['api', 'puestoTrabajo'],
    validate: {
        params: {
            idPuestoTrabajo: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        PuestoTrabajo.findOne({
            '_id': request.params.idPuestoTrabajo
        }, function (err, puestoTrabajo) {
            if (!err)
                return reply(puestoTrabajo);
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
    description: 'Crear un puesto de trabajo',
    tags: ['api', 'puestoTrabajo'],
    validate: {},
    handler: function (request, reply) {
        let puestoTrabajo = new PuestoTrabajo(request.payload);
        puestoTrabajo.save(function (err, puestoTrabajo) {
            if (!err)
                return reply(puestoTrabajo).created('/puestoTrabajo/' + puestoTrabajo.nombre); // HTTP 201
            if (11000 === err.code || 11001 === err.code)
                return reply(Boom.forbidden("El identificador del puesto de trabajo actual ya existe, por favor introduzca otro."));
            return reply(Boom.forbidden(err)); // HTTP 403
        });
    }
};

exports.update = {
    description: 'Actualizar los datos del puesto de trabajo.',
    tags: ['api', 'puestoTrabajo'],
    validate: {
        params: {
            idPuestoTrabajo: Joi.string().required()
        }
    },
    handler: function (request, reply) {
        PuestoTrabajo.findOneAndUpdate({
            '_id': request.params.idPuestoTrabajo
        }, request.payload, function (err, puestoTrabajo) {
            if (!err)
                return reply(puestoTrabajo);
            return reply(Boom.badImplementation(err)); // 500 error
        });
    }
};

exports.remove = {
    description: 'Elimina un puesto de trabajo',
    tags: ['api', 'puestoTrabajo'],
    validate: {
        params: {idPuestoTrabajo: Joi.string().required()}
    },
    handler: function (request, reply) {
        PuestoTrabajo.findOneAndRemove({
            '_id': request.params.idPuestoTrabajo
        }, function (err) {
            if (!err)
                return reply("Puesto de trabajo eliminado correctamente");
            return reply(Boom.badRequest(err));
        })
    }
}

exports.removeAll = {
    description: 'Eliminar todos los puestos de trabajo',
    tags: ['api', 'puestoTrabajo'],
    handler: function (request, reply) {
        mongoose.connection.db.dropCollection('puestoTrabajo', function (err, result) {
            if (!err)
                reply(result);
            return reply(Boom.badRequest(err));
        })
    }
}


