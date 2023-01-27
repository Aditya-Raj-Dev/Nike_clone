 const {Mensmodel}= require("../../Model/Mens/Mens.model")
const { PostMany, GetAll, Getparams } = require("../Crud.controller")

 const PostMens= PostMany(Mensmodel)
  const GetMens=GetAll(Mensmodel)
  const Getparam=Getparams(Mensmodel)


 module.exports={PostMens,GetMens,Getparam} 