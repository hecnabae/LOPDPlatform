/**
 * Created by hector on 22/11/2016.
 */
'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * @module Local
 * @description
 */
var LocalSchema = new Schema({
    empresa: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true
    },
    codigoPostal: {
        type: Number,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fax: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    descripcion: {
        type: String
    }
});

var local = mongoose.model('local', LocalSchema);

module.exports = {
    Local: local
}