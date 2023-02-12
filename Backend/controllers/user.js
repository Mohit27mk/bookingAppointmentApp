const User = require('../models/user');

exports.postAddUser=async(req,res,next)=>{
try{
const name=req.body.name;
const email=req.body.email;
const phoneno=req.body.phoneno;

const data=await User.create({name:name,email:email,phoneno:phoneno});
res.status(201).json({newUserDetails:data})
}catch(err){
console.log(err);
}
};

exports.getUser=async(req,res,next)=>{
 const users=await User.findAll();
 res.status(200).json({allUsers:users});
}

exports.deleteUser=async(req,res,next)=>{
   try{
     const uId=req.params.id;
    console.log(uId);
    await User.destroy({where:{id:uId}});
    res.sendStatus(200);}
    catch(err){
        console.log(err);
    }
}