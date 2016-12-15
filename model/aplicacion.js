/**
 * Created by hector on 21/11/2016.
 */
/**
 * Created by hector on 21/11/2016.
 */
'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * @module Aplicacion
 * @description Cualquier software que pueda contener datos de personas físicas.
 */
var AplicacionSchema = new Schema({
    empresa: {
        type: String,
        required: true
    },
    aplicacion: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    },
    fecha: {
        type: Date
    }
});

var aplicacion = mongoose.model('aplicacion', AplicacionSchema)

module.exports = {
    Aplicacion: aplicacion
}