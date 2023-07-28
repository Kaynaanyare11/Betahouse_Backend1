const mongoose = require('mongoose')
const joi = require('joi')
const Schema = mongoose.Schema
const InfoSchema = new Schema({
  name: {
    type: String,
    required: false,
    default: 'BetaHouse'
  },
  email: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  complain_email: {
    type: String,
    required: true
  },
  complain_phone: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: true
  },
  tiktok: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    required: true
  }
})
function InfoValidate (PayObj) {
  const Infoval = joi.object({
    email: joi.string().email().required(),
    logo: joi.string().required(),
    location: joi.string().required(),
    complain_email: joi.string().email().required(),
    complain_phone: joi.string().required(),
    facebook: joi.string().required(),
    tiktok: joi.string().required(),
    instagram: joi.string().required(),
    twitter: joi.string().required()
  })
  return Infoval.validate(PayObj)
}

const InfoModel = mongoose.model('Info', InfoSchema)

module.exports = {
  InfoModel,
  InfoValidate
}
// module.exports = mongoose.model({'User',userSchema})
