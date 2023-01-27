const {Router}=require("express")
const { PostMens, GetMens, Getparam } = require("../../Controller/Mens/Mens.controller")

 const MensRoute=Router()

 MensRoute.post("/",PostMens)
 MensRoute.get("/:id",Getparam)
 MensRoute.get("/",GetMens)
 

 module.exports={MensRoute}