/**
 * Created by hector on 21/11/2016.
 */
'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nif: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    cargo: {},
    empresa: {}, // Referencia a una empresa
    departamento: {} // Referencia al departamento de una empresa
});

var empleado = mongoose.model('empleado', EmpleadoSchema)

module.exports = {
    Empleado: empleado
}