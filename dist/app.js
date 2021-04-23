"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var seguimiento_servicio_1 = __importDefault(require("./routes/seguimiento_servicio"));
var application = express_1.default();
application.use(express_1.default.json());
application.use(morgan_1.default('dev'));
application.use(cors_1.default());
application.set('port', process.env.PORT || 8080);
application.use('/apiseguimientos', seguimiento_servicio_1.default);
exports.default = application;
