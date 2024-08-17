const bcrypt=require('bcrypt');
const schema=require('../models/adminschema');

const addAdmin=async(username,password)=>{
    console.log(1);
    const existingAdmin=await schema.findOne({username});
    if(existingAdmin){
        throw new Error('Admin with the username already exist');
    }
    const hashPassword= await bcrypt.hash(password,10);
    const newAdmin= new schema({username:username,password:hashPassword});
    const saveAdmin=await newAdmin.save();
    console.log(saveAdmin);
    return saveAdmin;
}
module.exports={addAdmin}