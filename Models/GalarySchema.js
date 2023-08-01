const mongoose = require('mongoose')
const joi = require('joi')
const Schema = mongoose.Schema
const GalarySchema = new Schema({
  // HomeID:{
  //     type:mongoose.Types.ObjectId,
  //     ref:'Houses',
  //     required:true
  // },
  ImageTitle: {
    type: String,
    required: true
  },
  ImagePath: {
    type: String,
    required: true
  }
})

function GalaryValidate (PayObj) {
  const Imagesval = joi.object({
    // HomeID: joi.string().required(),
    ImageTitle: joi.string().required(),
    ImagePath: joi.string().required()
  })
  return Imagesval.validate(PayObj)
}

const GalaryModel = mongoose.model('Galary', GalarySchema)

module.exports = {
  GalaryModel,
  GalaryValidate
}
