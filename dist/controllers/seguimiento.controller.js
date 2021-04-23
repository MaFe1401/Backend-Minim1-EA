"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeguimientos = exports.deleteSeguimiento = exports.addSeguimiento = void 0;
var Seguimiento_1 = __importDefault(require("../models/Seguimiento"));
function addSeguimiento(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, nombre, fecha, dni, telefono, fiebre, tos, dificultadRespiratoria, malestarGeneral, comprobarExistencia, nuevoSeguimiento, seguimiento;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, nombre = _a.nombre, fecha = _a.fecha, dni = _a.dni, telefono = _a.telefono, fiebre = _a.fiebre, tos = _a.tos, dificultadRespiratoria = _a.dificultadRespiratoria, malestarGeneral = _a.malestarGeneral;
                    return [4 /*yield*/, Seguimiento_1.default.findOne({ 'nombre': nombre })];
                case 1:
                    comprobarExistencia = _b.sent();
                    if (!!comprobarExistencia) return [3 /*break*/, 3];
                    console.log("Creando seguimiento");
                    nuevoSeguimiento = {
                        nombre: nombre,
                        fecha: fecha,
                        dni: dni,
                        telefono: telefono,
                        fiebre: fiebre,
                        tos: tos,
                        dificultadRespiratoria: dificultadRespiratoria,
                        malestarGeneral: malestarGeneral
                    };
                    seguimiento = new Seguimiento_1.default(nuevoSeguimiento);
                    return [4 /*yield*/, seguimiento.save()];
                case 2:
                    _b.sent();
                    res.status(201);
                    return [2 /*return*/, res.json(seguimiento.toJSON())];
                case 3:
                    console.log("ya hay un seguimiento de esta persona"),
                        res.status(401);
                    return [2 /*return*/, res.json({
                            message: 'no se ha podido crear el seguimiento porque ya existe',
                        })];
            }
        });
    });
}
exports.addSeguimiento = addSeguimiento;
function deleteSeguimiento(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var nombre, comprobarExistencia;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nombre = req.body.nombre;
                    return [4 /*yield*/, Seguimiento_1.default.findOne({ 'nombre': nombre })];
                case 1:
                    comprobarExistencia = _a.sent();
                    if (!!comprobarExistencia) return [3 /*break*/, 2];
                    console.log("no existe el seguimiento"),
                        res.status(404);
                    return [2 /*return*/, res.json({
                            message: 'no se ha borrado el seguimiento porque no existe',
                        })];
                case 2: return [4 /*yield*/, Seguimiento_1.default.deleteOne({ "nombre": nombre })];
                case 3:
                    _a.sent();
                    res.status(201);
                    return [2 /*return*/, res.json({
                            message: 'seguimiento borrado',
                        })];
            }
        });
    });
}
exports.deleteSeguimiento = deleteSeguimiento;
function getSeguimientos(res, req) {
    return __awaiter(this, void 0, void 0, function () {
        var seguimientos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Seguimiento_1.default.find({})];
                case 1:
                    seguimientos = _a.sent();
                    if (!seguimientos) {
                        res.status(404);
                        res.json({
                            message: 'no hay seguimientos',
                        });
                    }
                    else {
                        return [2 /*return*/, res.status(200).json(seguimientos)];
                    }
                    return [2 /*return*/, res.status(200).json(seguimientos)];
            }
        });
    });
}
exports.getSeguimientos = getSeguimientos;
