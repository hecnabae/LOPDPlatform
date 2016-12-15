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
var SoporteSchema = new Schema({
    empresa: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    }
});

var soporte = mongoose.model('soporte', SoporteSchema)

module.exports = {
    Soporte: soporte
}