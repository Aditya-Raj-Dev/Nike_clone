const mongoose=require("mongoose")

const MenString = { type: String, required: true };
const MenArray = { type: Array, required: true };
const MenNumber={type:Number,required:true}

const MensSchema= mongoose.Schema({
    title:MenString,
    img:MenArray,
    category:MenString,
    gender:MenString,
    size:MenArray,
    rating:MenNumber,
    description:MenString,
    price:MenNumber,
    color:MenString,
},
{versionKey:false},)

const Mensmodel= mongoose.model("Men",MensSchema)
const Womenmodel=mongoose.model("women",MensSchema)
const Kidsmodel=mongoose.model("kids",MensSchema)

module.exports={Mensmodel,Womenmodel,Kidsmodel}