const {Favouritesmodel}=require("../../Model/Favourite/Favourite.model")
const { PostFavourite,getFavourites } = require("../Crud.controller")

const Postfav=PostFavourite(Favouritesmodel)
const getfav=getFavourites(Favouritesmodel)

module.exports={Postfav,getfav}
