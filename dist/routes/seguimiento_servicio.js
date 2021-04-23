"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var seguimiento_controller_1 = require("../controllers/seguimiento.controller");
var seguimientoRouter = express_1.Router();
seguimientoRouter.route('/seguimientos/get')
    .get(seguimiento_controller_1.getSeguimientos);
seguimientoRouter.route('seguimientos/add')
    .post(seguimiento_controller_1.addSeguimiento);
seguimientoRouter.route('/seguimientos/:nombre')
    .post(seguimiento_controller_1.deleteSeguimiento);
exports.default = seguimientoRouter;
