const {Router}=require("express")
const { Signup } = require("../../Controller/Signup/Signup.controller")

 const SignupRoute=Router()

 SignupRoute.post("/",Signup)

 module.exports={SignupRoute}