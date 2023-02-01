require('dotenv').config()
const express =require("express")
const cors=require("cors")
const { connection } = require("./Database/db")
const { MensRoute } = require("./Route/Mens/Mens.route")
const { LoginRoute } = require("./Route/Signup/Login.route")
const { SignupRoute } = require("./Route/Signup/Signup.route")
const { BagRoute } = require("./Route/Bag/Bag.route")
const { WomenRoute } = require("./Route/Women/Women.route")
const { KidsRoute } = require("./Route/Kids/Kids.route")
const { authenication } = require('./Authentication/Authentication')
const { FavouriteRoute } = require('./Route/Favourite/Favourite')

const app=express()
app.use(cors());
app.use(express.json())

app.use("/signup",SignupRoute)
app.use("/login",LoginRoute)
app.use("/mens",MensRoute)
app.use("/bag", BagRoute)
app.use("/women",WomenRoute)
app.use("/kids",KidsRoute)
app.use("/favourite",authenication,FavouriteRoute)

app.get("/",(req,res)=>{
    res.send("Welcome to my world")
 })

 
app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to the database")
    }
    catch{
        console.log("Error in connecting")
    }
    console.log("server Started")
 })