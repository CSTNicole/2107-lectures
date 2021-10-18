// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import { updateAwait } from 'typescript';
import Cheetah from './models/Cheetah';


// const uri = 'mongodb+srv://yoonseo:yoonseo@cluster123.8reyn.mongodb.net?retryWrites=true&w=majority"';
//const uri = 'mongodb+srv://flamingo:Xp92tRG2rgmSHTkC@cluster0.ketvc.mongodb.net/sample_mflix?retryWrites=true&w=majority?retryWrites=true&w=majority';
//const uri = 'mongodb+srv://nicole:cstnicole@cluster0.teqwa.mongodb.net/sample_mflix?retryWrites=true&w=majority';
const uri = process.env.DATABASE_URL;

export async function getCheetahs() {
    const client = mongoose.connect(uri);
    
    const cheetahs = await Cheetah.find()
    return cheetahs;

};

// this function creates a cheetah data
export async function createCheetah(name, pattern, speed, country) {
    //connect to the client
    const client = mongoose.connect(uri);

    const cheetah = await new Cheetah(
        {
            name,
            pattern,
            speed,
            country
        }
    )
    
    return cheetah.save()
    
};