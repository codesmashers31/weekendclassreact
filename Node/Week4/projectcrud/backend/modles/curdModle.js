import mongoose from "mongoose";


const curdSchema = new mongoose.Schema({
    username:String,
    userage:Number,
    useremail:String
},{timestamps:true})


const crudModel = mongoose.model("curdtable",curdSchema)


export default crudModel