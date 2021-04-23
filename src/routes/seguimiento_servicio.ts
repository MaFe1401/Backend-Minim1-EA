import {Router} from 'express';
import {addSeguimiento, deleteSeguimiento, getSeguimientos} from '../controllers/seguimiento.controller';
const seguimientoRouter = Router();
seguimientoRouter.route('/seguimientos/get')
.get(getSeguimientos)
seguimientoRouter.route('seguimientos/add')
.post(addSeguimiento)
seguimientoRouter.route('/seguimientos/:nombre')
.post(deleteSeguimiento)

export default seguimientoRouter;