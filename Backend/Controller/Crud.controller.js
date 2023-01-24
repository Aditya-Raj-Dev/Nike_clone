
  const Postone=(model)=> async (req,res)=>{
    try{
        const data=await model.create(req.body)
         res.status(201).send({"msg":"successfull","data":data})
    }
    catch(e){
        res.status(500).send({"msg":"failed"})
    }
  }
    
    const PostMany=(model)=> async (req,res)=>{
        try{
            const data= await model.insertMany(req.body)
             res.status(201).send({"msg":"successfull","data":data})
        }
        catch(e){
            res.status(500).send({"msg":"failed"})
        }
    }

    const GetAll=(model)=>async (req,res)=>{
        try{
            const data=await model.find().lean().exec();
            res.status(201).send({"msg":"successfull","data":data})
        }
        catch(e){
            res.status(500).send({"msg":"failed"})
        }
    }

    const DeleteItem=(model)=> async (req,res)=>{
        try {
            const data = await model.findByIdAndDelete(req.params.id);
    
            return res.status(201).send(data);
    
        } catch (e) {
            res.status(500).send({"msg":"failed"})
        }
    }


    const  PostFavourite=(model)

    module.exports={PostMany,Postone,GetAll,DeleteItem }