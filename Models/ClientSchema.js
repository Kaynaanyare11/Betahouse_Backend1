const mongoose = require('mongoose')
const joi = require('joi')
const Schema = mongoose.Schema
const ClientSchema = new Schema({
  ClientName: {
    type: String,
    required: true
  },
  Logo: {
    type: String,
    required: true
  }
})

function ClientValidate (PayObj) {
  const Clientval = joi.object({
    // HomeID: joi.string().required(),
    ClientName: joi.string().required(),
    Logo: joi.string().required()
  })
  return Clientval.validate(PayObj)
}

const ClientModel = mongoose.model('Client', ClientSchema)

module.exports = {
  ClientModel,
  ClientValidate
}
