/**
 * Created by hector on 29/11/2016.
 */
'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * @module Fichero
 * @description Un fichero representa un soporte que contiene datos
 * personales. Existen diversos tipos de ficheros: clientes y proveedores;
 * nóminas, personal y recursos humanos; tienda virtual; usuarios web;
 * videovigilancia; socios; ...
 */
var FicheroSchema = new Schema({
    // Datos anexo A
    nombreFichero: {},
    tipoNotificacion: {},
    nivelSeguridad: {},
    codigoRGPD: {},
    fecha: {},

    // Datos identificacion fichero
    inscripcionRegistro: {
        type: Boolean,
        required: true
    },
    // Direccion de la empresa
    direccionAcceso: {
        type: String,
        required: true
    },
    responsable: {
        type: String,
        required: true
    },
    encargado: {
        type: String,
        required: true
    },
    responsableSeguridad: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    // Datos estructura del fichero
    // -- Datos de ubicación
    empresa: {
        type: String,
        required: true
    },
    tipoTratamiento: {
        type: String,
        required: true
    },

    // -- Datos de caracter identificativo
    datosIdentificativos: {
        type: Array,
        required: true
    },
    otrosDatosTipificados: {
        type: Array,
        required: true
    },

    // -- Finalidad
    finalidad: {
        type: String,
        required: true
    },

    // Origen y procedencia de los datos
    procedencia: {
        type: Array,
        required: true
    },
    interesados: {
        type: Array,
        required: true
    },

    // Cesion o comunicación de datos
    destinatarios: {
        type: Array,
        required: true
    }
});

var fichero = mongoose.model('fichero', FicheroSchema);

module.exports = {
    Fichero: fichero
}