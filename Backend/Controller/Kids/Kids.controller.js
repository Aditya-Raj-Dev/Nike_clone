const {Kidsmodel}= require("../../Model/Mens/Mens.model")
const { PostMany, GetAll, Getparams } = require("../Crud.controller")

 const PostKids= PostMany(Kidsmodel)
  const GetKids=GetAll(Kidsmodel)
  const Getparam=Getparams(Kidsmodel)


 module.exports={PostKids,GetKids,Getparam} 