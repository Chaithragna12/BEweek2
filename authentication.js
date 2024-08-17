const bcrypt=require('bcrypt');
const schema=require('../models/adminschema');

authenticateAdmin=async(username,password)=>{
    console.log('Authentication Verifying');
    try{
        const user=await schema.findOne({username});
        if(!user){
            console.log('No admin found');
            return {success:false,message:'Authentication Failed. User not found.'};
        }
        const match=await bcrypt.compare(password,user.password);
        if(!match){
            console.log('Authentication Failed');
            return {success:false,message:'Authentication Failed.Incorrect password'};
        }
        console.log('Authentication Successful');
        return {success:true,message:'Authentication Successful'};
    }
    catch(error){
        throw new Error('Authentication Failed.Error occurred');
    }
}
module.exports=authenticateAdmin;