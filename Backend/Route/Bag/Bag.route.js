const {Router}=require("express")
const { Addtobag, Deletefrombag, GetAllcartItem } = require("../../Controller/Bag/bag.controller")

 const BagRoute=Router()

 BagRoute.post("/",Addtobag)
 BagRoute.delete("/:id",Deletefrombag)
 BagRoute.get("/",GetAllcartItem)

 

 module.exports={BagRoute}