const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
 name : { type: String, required: true }
 //jhgfyshfshg

})


   

const dataCollectionModel=mongoose.model("datacollection",userSchema);

module.exports=dataCollectionModel;