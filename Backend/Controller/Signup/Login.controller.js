const {Signupmodel}=require("../../Model/Signup/Signup.model")
var jwt = require('jsonwebtoken');
const bcrypt=require("bcrypt")

const Login=async (req,res)=>{
    const {email,password}=req.body;
     const user=await Signupmodel.findOne({email})
      if(!user){
         res.send({"msg":"Please Signup First",toast:"e"})
      }
      else{
        const hash_passowrd=user.password
        const userid=user._id
        bcrypt.compare(password, hash_passowrd, function(err, result) {
           if(result){
            console.log(result,"r")
            var token = jwt.sign({ userid }, "1234" );
            res.send({ "msg": "Login Sucessfull", "token": token,toast:"s",user:user.firstname})
           }
           else{
            res.send({ "msg": "wrong Credential",toast:"e" });           }
      });
      }
}

module.exports={Login}