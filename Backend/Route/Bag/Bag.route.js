const {Router}=require("express")
const { Addtobag, Deletefrombag, GetAllcartItem, Changeqty } = require("../../Controller/Bag/bag.controller")

 const BagRoute=Router()

 BagRoute.post("/",Addtobag)
 BagRoute.delete("/:id",Deletefrombag)
 BagRoute.get("/",GetAllcartItem)
 BagRoute.patch("/:id",Changeqty)

 

 module.exports={BagRoute}