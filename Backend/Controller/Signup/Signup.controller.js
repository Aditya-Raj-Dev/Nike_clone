const {Signupmodel}=require("../../Model/Signup/Signup.model")
 const bcrypt = require("bcrypt");

const Signup=async (req,res)=>{
    const {email,firstname,lastname,password,dob,gender}=req.body;
     let user=await Signupmodel.findOne({email})
     if(user){
        res.send({"msg":"User Already Exhist","toast":"i"})
     }
     else{
        bcrypt.hash(password, 5, async function(err, hash) {
             if(err){
                res.send({"msg":"Please Signup Again","toast":"e"})
             }
             else{
                const new_user = await Signupmodel.create({
                    email,firstname,lastname,password:hash,dob,gender
                })
                res.send({ "msg": "Signup Sucessfull" ,toast:"s"})
             }
        });
    
      
            
        
     }
}
module.exports={Signup}