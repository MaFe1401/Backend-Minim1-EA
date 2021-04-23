import {request, Request, Response} from 'express';
import Seguimiento from '../models/Seguimiento'

export async function addSeguimiento(req: Request, res:Response): Promise<Response>{
    const {nombre, fecha, dni, telefono, fiebre, tos, dificultadRespiratoria, malestarGeneral}=req.body;
    const comprobarExistencia = await Seguimiento.findOne({'nombre':nombre});
    if (!comprobarExistencia){
        console.log("Creando seguimiento");

        const nuevoSeguimiento = {
            nombre: nombre,
            fecha: fecha,
            dni: dni,
            telefono: telefono,
            fiebre: fiebre,
            tos: tos,
            dificultadRespiratoria: dificultadRespiratoria,
            malestarGeneral: malestarGeneral
        }
        const seguimiento = new Seguimiento(nuevoSeguimiento);
        await seguimiento.save();
        res.status(201);
        return res.json(seguimiento.toJSON());

    } else{
        console.log("ya hay un seguimiento de esta persona"),
        res.status(401);
        return res.json({
            message:'no se ha podido crear el seguimiento porque ya existe',
        });
    }

}

export async function deleteSeguimiento(req:Request, res:Response): Promise<Response>{
    const{nombre}=req.body;
    const comprobarExistencia = await Seguimiento.findOne({'nombre':nombre});
    if (!comprobarExistencia){
        console.log("no existe el seguimiento"),
        res.status(404);
        return res.json({
            message:'no se ha borrado el seguimiento porque no existe',
        });
    }
    else{
        await Seguimiento.deleteOne({"nombre":nombre});
        res.status(201);
        return res.json({
            message:'seguimiento borrado',
        });
    }
}
export async function getSeguimientos(res:Response,req: Request): Promise <Response>{
    const seguimientos= await Seguimiento.find({});
    if(!seguimientos){
        res.status(404);
        res.json({
            message:'no hay seguimientos',
        });

    } else {
       return res.status(200).json(seguimientos);
        }
    return res.status(200).json(seguimientos);
}