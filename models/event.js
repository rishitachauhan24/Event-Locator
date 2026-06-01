const mongoose=require("mongoose")
const { applyTimestamps } = require("./user")
const eventSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        reuired:true
    },

    location:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


}, {
    timestamps:true
})

module.exports=mongoose.model("Event", eventSchema)