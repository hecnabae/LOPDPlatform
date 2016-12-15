/**
 * Created by hector on 22/11/2016.
 */
'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * @module Equipo
 * @description Un equipo es cualquier dispositivo capaz de almacenar
 * datos de personas físicas
 */
var EquipoSchema = new Schema({
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
    so: {
        type: String
    },
    fabricante: {
        type: String
    },
    uso: {
        type: String
    },
    dispositivoPortatil: {
        type: Boolean,
        required: true
    },
    sistemaCifrado: {
        type: String
    },
    sistemaEtiquetado: {
        type: String
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
});

var equipo = mongoose.model('equipo', EquipoSchema);

module.exports = {
    Equipo: equipo
}