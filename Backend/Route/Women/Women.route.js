const {Router}=require("express")
const { PostWomen, GetWomen, Getparam } = require("../../Controller/Women/Women.controller")

 const WomenRoute=Router()

 WomenRoute.post("/",PostWomen)
 WomenRoute.get("/:id",Getparam)
 WomenRoute.get("/",GetWomen)
 

 module.exports={WomenRoute}