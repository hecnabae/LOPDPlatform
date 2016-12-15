/**
 * Created by hector on 21/11/2016.
 * Un puesto es un equipo al que hay que aplicar LOPD.
 */
'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PuestoSchema = new Schema({
    id: {},
    tipo: {},
    nombre: {},
    descripcion: {},
    servidor: {
        type: Boolean
    },
    sistemaOperativo: {},
    internet: {
        type: Boolean
    },
    modem: {
        type: Boolean
    },
    email: {
        type: Boolean
    },
    usoPassword: {
        type: Boolean
    },
    limiteIntentosPassword: {
        type: Boolean
    },
    protectorPantallaPassword: {
        type: Boolean
    },
    auditoriaAccesos: {
        type: Boolean
    },
    auditoriaAcciones: {
        type: Boolean
    },
    ficherosTemporales: {
        type: Boolean
    },
    cifradoDatos: {
        type: Boolean
    },
    otros:{}
});

var puesto = mongoose.model('puesto', PuestoSchema)

module.exports = {
    Puesto: puesto
}