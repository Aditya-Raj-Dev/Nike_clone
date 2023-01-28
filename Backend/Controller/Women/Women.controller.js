const {Womenmodel}= require("../../Model/Mens/Mens.model")
const { PostMany, GetAll, Getparams } = require("../Crud.controller")

 const PostWomen= PostMany(Womenmodel)
  const GetWomen=GetAll(Womenmodel)
  const Getparam=Getparams(Womenmodel)


 module.exports={PostWomen,GetWomen,Getparam} 