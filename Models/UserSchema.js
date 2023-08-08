const mongoose= require('mongoose');
const joi = require("joi");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true,
    },
    password:{
        type:String, 
        required:true,
        minlength:5,
    },
    Roles:{
        type:String, 
        required:true
    },
    Status:{
        type:String, 
        required:true,
        default:'Active',
        enum:['Active', 'Blocked','Suspended']

    },
});
function UserValidate(PayObj) {
    let Userval = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        Roles: joi.string().required(),
        Status: joi.string().required(),

    })
    return Userval.validate(PayObj)
}

function LoginValidate(PayObj) {
    let Userval = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),

    })
    return Userval.validate(PayObj)
}
const UserModel=new mongoose.model('User',userSchema)

module.exports={
    UserModel,
    UserValidate,
    LoginValidate

}
// module.exports = mongoose.model({'User',userSchema})