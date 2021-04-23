"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    nombre: String,
    fecha: String,
    dni: String,
    telefono: String,
    fiebre: String,
    tos: String,
    dificultadRespiratoria: String,
    malestarGeneral: String
});
exports.default = mongoose_1.model('Seguimiento', schema);
