const {Router}=require("express")
const { PostMens, GetMens } = require("../../Controller/Mens/Mens.controller")

 const MensRoute=Router()

 MensRoute.post("/",PostMens)
 MensRoute.get("/",GetMens)

 module.exports={MensRoute}