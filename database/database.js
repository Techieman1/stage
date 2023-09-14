const mongoose =require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const {config}=require("dotenv")
config()
// const dotenv = require("dotenv");
//MONGO_UR2="mongodb+srv://todo:africa@cluster0.8lsutr0.mongodb.net/?retryWrites=true&w=majority"
// dotenv.config();
async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL,
            
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
        console.log('connected to the mongo')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connect