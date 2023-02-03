const Postone = (model) => async (req, res) => {
    
  try {

    const data = await model.create(req.body);
    res.status(201).send({ msg: "successfull", data: data });
  } catch (e) {
    res.status(500).send({ msg: "failed","err":e });
  }
};

const Addtocart= (model) => async (req, res) => {
  try {
       const id=req.body._id
       let prod= await model.find({_id:id})
       if(prod.length>0){
        console.log(prod.length)
        res.send({"msg":"Product Already Present in the cart","toast":"i"})
       }
       else{
         const data = await model.create(req.body);
         res.status(201).send({ msg: "Product Added successfully","toast":"s" });
       }
  } catch (e) {
    res.status(500).send({ msg: "failed","toast":"e" });
  }
};

const Getparams =(model)=> async (req,res)=>{
   const _id=req.params.id
  try{
    const data =await model.find({_id:_id});
   
    res.status(201).send({ msg: "successfull", data: data });
  } catch (e) {
    res.status(500).send({ msg: e });
  }
  
} 

const PostMany = (model) => async (req, res) => {
  try {
    const data = await model.insertMany(req.body);
    res.status(201).send({ msg: "successfull", data: data });
  } catch (e) {
    res.status(500).send({ msg: e });
  }
};

const GetAll = (model) => async (req, res) => {
  try {
    if(req.query){
      const data=await model.find(req.query)
      res.status(200).send({"msg":"successfull", data: data })
    }

    else{
       const data = await model.find()
    res.status(201).send({ msg: "successfull", data: data });
    }
    
  } catch (e) {
    res.status(500).send({ msg: "failed" });
  }
};

const DeleteItem = (model) => async (req, res) => {
  try {
    await model.findByIdAndDelete(req.params.id);
    const data = await model.find()
    res.status(201).send({ msg: "successfull", data: data });
  } catch (e) {
  
  }
};

const Changequantity=(model)=> async (req,res)=>{
  try{
    await  model.findOneAndUpdate({ _id: req.params.id }, {quantity: +(req.body.qty)}, { new: true });
    const data = await model.find()
    res.status(201).send({ msg: "successfull", data: data });
  }
  catch(e){
    res.status(500).send({ msg: "failed" }); 
  }


}

const PostFavourite = (model) => async (req, res) => {
  try {
     const old=await model.find({_id:req.body._id})
   if(old.length===0){
 const data = await model.create({...req.body});
    res.status(201).send({"msg":"success","data":data});
   }
   else{
    res.send({"msg":"Already in Favourite"})
   }
   
  } catch (e) {
    res.status(500).send({ msg: "failed", "err":e });
  }
};

const getFavourites = (model) => async (req, res) => {
  try {
    const data = await model.find({ user: req.body.user });
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send({ msg: "failed" });
  }
};

module.exports = { PostMany, Postone,Getparams, GetAll, DeleteItem,getFavourites,PostFavourite,Addtocart,Changequantity };
