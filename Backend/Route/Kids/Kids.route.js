const {Router}=require("express")
const { PostKids, GetKids, Getparam } = require("../../Controller/Kids/Kids.controller")

 const KidsRoute=Router()

 KidsRoute.post("/",PostKids)
 KidsRoute.get("/:id",Getparam)
 KidsRoute.get("/",GetKids)
 

 module.exports={KidsRoute}