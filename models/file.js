const mongoose=require("mongoose");


const feedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    msg:{
        type:String,
       required:true,
    },
    contactNo:{
        type:Number,
    }

})

const feedback=mongoose.model("feedback",feedbackSchema);
module.exports=feedback;