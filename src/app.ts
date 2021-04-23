import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import seguimientoRouter from './routes/seguimiento_servicio';


const application = express();

application.use(express.json());
application.use(morgan('dev'));
application.use(cors());

application.set('port', process.env.PORT || 8080);
application.use('/apiseguimientos', seguimientoRouter);

export default application;