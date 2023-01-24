const {Router}=require("express")
const { Login } = require("../../controller/Signup/Login.controller")

 const LoginRoute=Router()

 LoginRoute.post("/",Login)

 module.exports={LoginRoute}