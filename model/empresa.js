'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * @module Empresa
 * @description
 */
var EmpresaSchema = new Schema({
    cif: {
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
    codigoPostal: {
        type: String,
        required: true
    },
    poblacion: {},
    provincia: {},
    pais: {},
    delegaciones: {},
    responsable: {},
    empresaNuevaCreacion: {},
    representanteLegalTrabajadores: {},
    actividad: {},
    consultor: {},
    colaborador: {},
    estado: {}
});

var empresa = mongoose.model('empresa', EmpresaSchema);

module.exports = {
    Empresa: empresa
}