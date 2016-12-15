/**
 * Created by hector on 29/11/2016.
 */

/**
 * Created by hector on 21/11/2016.
 */
'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * @module PersonalAutorizado
 * @description Personal que tiene autorización de acceso a datos de información personal.
 */
var PersonalAutorizadoSchema = new Schema({
    empresa: {
        type: String,
        required: true
    },
    nif: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    perfil: {
        type: String,
        required: true
    },
    funcion: {
        type: String,
        required: true
    },
    departamento: {
        type: String
    },
    fechaAlta: {
        type: Date,
        required: true
    },
    fechaBaja: {
        type: Date
    },
    clausulaConfidencialidad: {
        type: Boolean,
        required: true
    },
    permisos: {
        type: Array,
        required: true
    }
});

var personalAutorizado = mongoose.model('personalAutorizado', PersonalAutorizadoSchema)

module.exports = {
    PersonalAutorizado: personalAutorizado
}