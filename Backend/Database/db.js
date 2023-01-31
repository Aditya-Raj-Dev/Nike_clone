const mongoose =require("mongoose")

const connection =mongoose.connect("mongodb+srv://adi:123@cluster0.vgstopt.mongodb.net/nike")

module.exports={connection}