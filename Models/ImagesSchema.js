const mongoose= require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const ImagesSchema = new Schema({
    HomeID:{
        type:mongoose.Types.ObjectId, 
        ref:'Houses',
        required:true
    },
    ImagePath:{
        type:String, 
        required:true
    },
   
});

function ImagesValidate(PayObj) {
    let Imagesval = joi.object({
        HomeID: joi.string().required(),
        ImagePath:joi.string().required(),
       
    })
    return Imagesval.validate(PayObj)
}

const ImagesModel = mongoose.model("Images", ImagesSchema)

module.exports = {
    ImagesModel,
    ImagesValidate
}
