import mongoose from "mongoose";


const Portfolio_Model = new mongoose.Schema({
    name : String,
    email :String,
    phone : String,
    message :String,
});


export const  PortFolio = mongoose.models.PortFolio || mongoose.model("PortFolio",Portfolio_Model)