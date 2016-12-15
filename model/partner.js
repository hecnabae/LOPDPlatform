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
 * @module Partner
 * @description Colaboradores y empresas externas
 */
var PartnerSchema = new Schema({
    // Referencia a la empresa con la que colabora el partner
    empresa: {
        type: String,
        required: true
    },
    // nif o cif
    identificacionFiscal: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    actividad: {
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
        type: String
    },
    email: {
        type: String,
        required: true
    },
    accesoDatosPersonales: {
        type: Boolean,
        required: true
    },
    contrato: {
        type: Boolean,
        required: true
    },
    notas: {
        type: String
    },
    representante: {
        type: Object
        // - NIF/CIF
        // - Nombre
        // - Dirección
        // - Localidad
        // - Código Postal
        // - Provincia
        // - País
        // - Telefono
        // - Fax
        // - Email
    },
    permisos: {
        type: Array,
        required: true
    }
});

var partner = mongoose.model('partner', PartnerSchema)

module.exports = {
    Partner: partner
}