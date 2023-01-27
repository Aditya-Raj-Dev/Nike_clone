const mongoose=require("mongoose")

const BagString = { type: String, required: true };
const BagArray = { type: Array, required: true };
const BagNumber={type:Number,required:true}

const BagsSchema= mongoose.Schema({
    title:BagString,
    img:BagArray,
    category:BagString,
    gender:BagString,
    size:BagString,
    rating:BagNumber,
    description:BagString,
    price:BagNumber,
    color:BagString,
    quantity:BagNumber
},
{versionKey:false},)

const Bagsmodel= mongoose.model("Bag",BagsSchema)

module.exports={Bagsmodel}