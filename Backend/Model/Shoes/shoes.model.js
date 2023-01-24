const mongoose=require("mongoose")

const shoeString = { type: String, required: true };
const shoeArray = { type: Array, required: true };
const shoeNumber={type:Number,required:true}

const ShoesSchema= mongoose.Schema({
    title:shoeString,
    img:shoeArray,
    category:shoeString,
    gender:shoeString,
    size:shoeArray,
    rating:shoeNumber,
    description:shoeString,
    price:shoeNumber,
    color:shoeString,
},
{versionKey:false},)

const Shoesmodel= mongoose.model("shoes",ShoesSchema)

module.exports={Shoesmodel}