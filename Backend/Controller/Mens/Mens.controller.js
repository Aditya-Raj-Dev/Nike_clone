 const {Mensmodel}= require("../../Model/Mens/Mens.model")
const { PostMany, GetAll } = require("../Crud.controller")

 const PostMens= PostMany(Mensmodel)
  const GetMens=GetAll(Mensmodel)


 module.exports={PostMens,GetMens} 