const mongoose= require("mongoose")

const SignupSchema= mongoose.Schema({
    email:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    password:{type:String,required:true},
    dob:{type:Date,required:true},
    gender:{type:String,required:true},
   country:{type:String,required:true},
},{timestamps:true},)

const Signupmodel= mongoose.model("signup",SignupSchema)

module.exports={Signupmodel} 