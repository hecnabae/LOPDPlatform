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
var SalidaSoporteSchema = new Schema({
    soporte: {
        type: String,
        required: true
    },
    responsableEntrega: {
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
    formaEnvio: {
        type: String,
        required: true
    },
    precaucionesTransporte: {
        type: String,
        required: true
    },
    remitente: {
        type: String,
        required: true
    },
    destinatario: {
        type: Object,
        required: true
    },
    autorizacion: {
        type: Object,
        required: true
    }
});

var salidaSoporte = mongoose.model('salidaSoporte', SalidaSoporteSchema)

module.exports = {
    SalidaSoporte: salidaSoporte
}