const {Router}=require("express")
const { PostShoes, GetShoes } = require("../../Controller/Shoes/shoes.controller")

 const ShoesRoute=Router()

 ShoesRoute.post("/",PostShoes)
 ShoesRoute.get("/",GetShoes)

 module.exports={ShoesRoute}