const {Signupmodel}=require("../../Model/Signup/Signup.model")
var jwt = require('jsonwebtoken');
const bcrypt=require("bcrypt")

const Login=async (req,res)=>{
    const {email,password}=req.body;
     const user=await Signupmodel.findOne({email})
      if(!user){
         res.send({"msg":"Please Signup First"})
      }
      else{
        const hash_passowrd=user.password
        const userid=user._id
        bcrypt.compare(password, hash_passowrd, function(err, result) {
          if(err){
            res.send({"msg": "Please Login Again",toast:"e" })
          }
           if(result){
            var token = jwt.sign({ userid }, "1234" );
            res.send({ "msg": "Login SucessFull", "token": token,toast:"s" })
           }
           else{
            res.send({ "msg": "wrong Credential",toast:"e" });           }
      });
      }
}

module.exports={Login}