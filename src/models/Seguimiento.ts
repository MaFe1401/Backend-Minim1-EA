import {Schema, model, Document} from 'mongoose';
const schema = new Schema({
    nombre: String,
    fecha: String,
    dni: String, 
    telefono: String,
    fiebre:String,
    tos: String,
    dificultadRespiratoria: String,
    malestarGeneral:String
});
interface Seguimiento extends Document {
    nombre: String;
    fecha: Date;
    dni: String; 
    telefono: String;
    fiebre:String;
    tos: String;
    dificultadRespiratoria: String;
    malestarGeneral:String;
}
export default model<Seguimiento>('Seguimiento', schema);