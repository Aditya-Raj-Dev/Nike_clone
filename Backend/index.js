const express =require("express")

const { Login } = require("./controller/Signup/Login.controller")
const { connection } = require("./database/db")
const { ShoesRoute } = require("./Route/Shoes/shoes.route")
const { LoginRoute } = require("./Route/Signup/Login.route")
const { SignupRoute } = require("./Route/Signup/signup.route")

const app=express()

app.use(express.json())

app.use("/signup",SignupRoute)
app.use("/login",LoginRoute)
app.use("/shoes",ShoesRoute)

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