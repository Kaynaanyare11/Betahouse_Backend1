const jwt= require('jsonwebtoken');
const {UserModel} = require("../Models/UserSchema")
require('dotenv').config()

const AuthenticateRoute=(AllowRoute)=>{
    return async (req,res,next)=>{
        const TokenHeader =req.headers['authorization']
        if(!TokenHeader) return res.status(401).send('No Token Provided')
        const token= TokenHeader.split(' ')[1]
        
        
        try
        {
            const TokenVerify=jwt.verify(token,process.env.SecretKey)
            const User = await UserModel.findById(TokenVerify.id)
            if(!User) return res.status(404).send('User Not Found')
            if(!User.Status=='Active') return res.status(401).send('This User is Not Active')
            if(!AllowRoute.includes(User.Roles)) return res.status(401).send('You can not Access This Route')
            next()
        } catch (error) {
        res.status(400).send(error.message)
        
        
    }

        


    }

}

module.exports=AuthenticateRoute;