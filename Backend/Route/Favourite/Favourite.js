const {Router}=require("express")
const { Postfav, getfav } = require("../../Controller/Favourite/Favourite.controller")


 const FavouriteRoute=Router()

 FavouriteRoute.post("/",Postfav)
 FavouriteRoute.get("/",getfav)



 module.exports={FavouriteRoute}