const mongoose = require('mongoose')
const joi = require('joi')
const Schema = mongoose.Schema
const ServiseSchema = new Schema({

  Title: {
    type: String,
    required: true
  },
  Icon: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }

})

function ServiseValidate (PayObj) {
  const Serviseval = joi.object({
    // HomeID: joi.string().required(),
    Title: joi.string().required(),
    Icon: joi.string().required(),
    Description: joi.string().required()

  })
  return Serviseval.validate(PayObj)
}

const ServiseModel = mongoose.model('Servise', ServiseSchema)

module.exports = {
  ServiseModel,
  ServiseValidate
}
