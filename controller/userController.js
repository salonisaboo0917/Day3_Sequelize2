 
 const {validate}=require('joi');
const { userSchema } = require('../middleware/userValidate');
const { UserModel } = require('../model/userModel');

 const createUser=async(req,res)=>{
    try{
        const {error}=validate(req.body,userSchema);
    if(error) return res.status(400).json(error.details[0].message)
 
    const user= await UserModel.create(req.body,userSchema);
    return res.status(200).json(user);
    }catch(error){
        console.error(error);
        res.status(500).json({error:error.message});
    }
    };
 const getUsers=async(req,res)=>{
    try{
        const user=await UserModel.findAll();
        return res.status(200).json({user})
    }catch(error){
        console.error(error);
        return res.status(500).json({error:error.message});
    }
 };
 const getUserById=async(req,res)=>{
    try{
        const user=await UserModel.findByPk(req.params.id);
        return res.status(200).json(user);
    }catch(error){
        console.error(error);
        return res.status(500).json({error:error.message});
    }
 };
 const updateUser=async(req,res)=>{
    try{
        const{error}=userSchema.validate(req.body);
        if(error) return res.status(400).json({message:error.details[0].message});
        const user=await UserModel.findByPk(req.params.id);
        if(!user)return res.status(500).json({error:error.message});
        await UserModel.update(req.body);
        return res.status(200).json({msg:"User Updated"});

    }catch(error){
        console.error(error);
        return res.status(500).json({error:error.message});
    }

 };
 const deleteUser=async(req,res)=>{
    try{
        const user=await UserModel.findByPk(req.params.id);
        if(!user) return res.status(500).json({error:'User not found'});
        await user.destroy();
        return res.status(200).json({msg:"User Deleted"})
    }catch(error){
        console.error(error);
        return res.status(500).json({error:error.message});
    }
 }

 module.exports={createUser,getUsers,getUserById,updateUser,deleteUser}