const {Bagsmodel}=require("../../Model/bag/bag.model")
const { Postone, DeleteItem, Addtocart, GetAll, Changequantity } = require("../Crud.controller")

 const Addtobag= Addtocart(Bagsmodel)
const Deletefrombag=DeleteItem(Bagsmodel)
const GetAllcartItem=GetAll(Bagsmodel)
const Changeqty=Changequantity(Bagsmodel)

module.exports={Addtobag,Deletefrombag,GetAllcartItem,Changeqty}