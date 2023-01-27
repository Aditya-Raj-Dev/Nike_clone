const {Bagsmodel}=require("../../Model/bag/bag.model")
const { Postone, DeleteItem, Addtocart, GetAll } = require("../Crud.controller")

 const Addtobag= Addtocart(Bagsmodel)
const Deletefrombag=DeleteItem(Bagsmodel)
const GetAllcartItem=GetAll(Bagsmodel)

module.exports={Addtobag,Deletefrombag,GetAllcartItem}