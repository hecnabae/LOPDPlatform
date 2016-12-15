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
 * @module Soporte
 * @description Contenedor de datos
 */
var EntradaSoporteSchema = new Schema({
    soporte: {
        type: String,
        required: true
    },
    responsableRecepcion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    periodicidad: {
        type: Number,
        required: true
    },
    numeroSoportes: {
        type: Number,
        required: true
    },
    formaEnvio: {
        type: String,
        required: true
    },
    emisor: {
        type: Object,
        required: true
    }
});

var entradaSoporte = mongoose.model('entradaSoporte', EntradaSoporteSchema)

module.exports = {
    EntradaSoporte: entradaSoporte
}