const mongoose = require('mongoose')
const joi = require('joi')
const Schema = mongoose.Schema
const AboutSchema = new Schema({
  FewDescription: {
    type: String,
    required: true
  },
  MoreDescription: {
    type: String,
    required: true
  }
})

function AboutValidate (PayObj) {
  const Aboutval = joi.object({
    FewDescription: joi.string().required(),
    MoreDescription: joi.string().required()
  })
  return Aboutval.validate(PayObj)
}

const AboutModel = mongoose.model('About', AboutSchema)

module.exports = {
    AboutModel,
    AboutValidate
}
