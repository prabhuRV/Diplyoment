const express=require("express")

const app=express();

const connection = require("./configuration/config");
const dataCollectionModel = require("./models/user.model");


require('dotenv').config()

app.use(express.json());
//jgfgsjg

app.get("/",async(req,res)=>{

    let {name}=req.query
    console.log(name)
    let data=new dataCollectionModel({name})
   await data.save()
  res.send("Welcome to Home Page");
})



app.listen(process.env.PORT,async()=>{
    try{
       
        await connection 
        console.log("succesfull to db");
    }
    catch (err){
        console.log(err);
    }
    console.log("Listening at 8080");
})