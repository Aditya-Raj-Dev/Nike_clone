const mongoose=require("mongoose")

const FavouriteString = { type: String, required: true };
const FavouriteArray = { type: Array, required: true };
const FavouriteNumber={type:Number,required:true}

const FavouritesSchema= mongoose.Schema({
    title:FavouriteString,
    img:FavouriteArray,
    category:FavouriteString,
    gender:FavouriteString,
    size:FavouriteString,
    rating:FavouriteNumber,
    description:FavouriteString,
    price:FavouriteNumber,
    color:FavouriteString
},
{versionKey:false},)

const Favouritesmodel= mongoose.model("Favourite",FavouritesSchema)

module.exports={Favouritesmodel}