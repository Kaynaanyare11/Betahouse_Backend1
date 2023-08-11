const { UserModel,LoginValidate } = require('../Models/UserSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Login = async (req, res) =>{
    
    const { error } = LoginValidate(req.body)
    if (error) return res.send(error.message)
    try {
    const user= await UserModel.findOne({email:req.body.email,Status:'Active'})
    if(!user) return res.status(404).send({Error: 'User not found'});
    const CheckPassword = await bcrypt.compare(req.body.password,user.password)
    if(!CheckPassword) return res.status(404).send({Error:'Invalid password'});

    const token = jwt.sign({email:user.email,id:user._id},process.env.SecretKey,{expiresIn:'1h'})

    return res.status(200).send({Token:token,User:user.name +' '+'Loged in'})
    } catch (error) {
        res.status(401).send(error.message)
        
        
    }
    

}

module.exports=Login