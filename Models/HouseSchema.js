const mongoose = require('mongoose')
const joi = require('joi')
const Schema = mongoose.Schema
const homeSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Age: {
    type: String,
    required: true
  },
  Rent: {
    type: String,
    required: true
  },
  Deposit: {
    type: String,
    required: true
  },
  Parking: {
    type: String,
    required: true
  },
  Images: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    required: true
  },
  Rooms: {
    type: Number,
    required: true
  },
  Pathrooms: {
    type: Number,
    required: true
  },
  Owner: {
    type: String,
    required: true
  },
  creatorID: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

function HouseValidate (PayObj) {
  const houseval = joi.object({
    type: joi.string().required(),
    Address: joi.string().required(),
    Age: joi.string().required(),
    Rent: joi.string().required(),
    Deposit: joi.string().required(),
    Images: joi.string().required(),
    Parking: joi.string().required(),
    Status: joi.string().required(),
    Rooms: joi.string().required(),
    Pathrooms: joi.string().required(),
    Owner: joi.string().required(),
    creatorID: joi.string().required()

  })
  return houseval.validate(PayObj)
}

const HouseModel = mongoose.model('Houses', homeSchema)

module.exports = {
  HouseModel,
  HouseValidate
}
