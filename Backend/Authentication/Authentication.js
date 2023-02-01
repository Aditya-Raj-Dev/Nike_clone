const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
require('dotenv').config()

const authenication=(req,res,next)=>{
    if(req.headers.authorization){
        let token=req.headers.authorization
        try{
          var decoded =jwt.verify(token,process.env.SECRET_KEY)
          req.body.userid=decoded.userid
          console.log(decoded,"decode")
          next() 
        }
        catch(e){
            console.log(e)
            res.send("Please login again") 
        }
    }
    else{
        res.send({"msg":"please login "})
    }
}

const authorization =(modal,permitedrole)=>{
    return async (req,res,next)=>{
        const userid=req.body.userid;
        const user=await modal.find({_id:userid});
        const role=user.role;
        if(permitedrole.includes(role)){
            next()
        }
        else{
            res.send({"msg":"Not authorized"})
        }
    }
}

module.exports={authenication,authorization}