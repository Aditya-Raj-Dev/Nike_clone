 const {Shoesmodel}= require("../../Model/Shoes/shoes.model")
const { PostMany, GetAll } = require("../Crud.controller")

 const PostShoes= PostMany(Shoesmodel)
  const GetShoes=GetAll(Shoesmodel)


 module.exports={PostShoes,GetShoes} 