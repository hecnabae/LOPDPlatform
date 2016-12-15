/**
 * Created by hector on 29/11/2016.
 */
'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * @module Almacen
 * @description Es el lugar donde se almacenan los soportes, copias de respaldo,
 * documentos, etc.
 */
var AlmacenSchema = new Schema({
    empresa: {
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
    tipo: {
        type: String,
        required: true
    },
    notas: {
        type: String
    }
});

var almacen = mongoose.model('almacen', AlmacenSchema);

module.exports = {
    Almacen: almacen
}