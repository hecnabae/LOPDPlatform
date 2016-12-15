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
 * @module Incidencia
 * @description Contenedor de datos
 */
var IncidenciaSchema = new Schema({
    empresa: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    fechaNotificacion: {
        type: Date,
        required: true
    },
    notificadaPor: {
        type: String,
        required: true
    },
    notificadaA: {
        type: String,
        required: true
    },
    ficherosAfectados: {
        type: Array,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    efectos: {
        type: String,
        required: true
    },
    medidasCorrectoras: {
        type: String,
        required: true
    },
    entornoAfectado: {
        type: String,
        required: true
    },
    perdidaDeDatos: {
        type: Boolean,
        required: true
    },

    // Procedimiento recuperación de datos
    procesoEjecutadoPor: {
        type: String,
        required: true
    },
    procedimiento: {
        type: String,
        required: true
    },
    datosRestaurados: {
        type: String,
        required: true
    },
    datosRecuperadosManualmente: {
        type: String,
        required: true
    }
});

var incidencia = mongoose.model('incidencia', IncidenciaSchema)

module.exports = {
    Incidencia: incidencia
}