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
 * @module PuestoTrabajo
 * @description
 */
var PuestoTrabajoSchema = new Schema({
    local: {
        type: String,
        required: true
    },
    departamento: {
        type: String
    },
    accesoEquipos: {
        type: Array,
        required: true
    },
    accesoAplicaciones: {
        type: Array,
        required: true
    },
    accesoFicheros: {
        type: Array,
        required: true
    }
});

var puestoTrabajo = mongoose.model('puestoTrabajo', PuestoTrabajoSchema)

module.exports = {
    PuestoTrabajo: puestoTrabajo
}