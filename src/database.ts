import mongoose from 'mongoose';

export async function initDB(){
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/database',{
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('running');
}