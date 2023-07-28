const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StaticSchema = new Schema({
  HeroSection: {
    Title: {
      type: String,
      required: false,
      default: 'Welcome to the BetaHouse RealState'
    },
    Description: {
      type: String,
      required: false,
      default: 'We are ready to solve your home renting problems'
    },
    HeroImage: {
      type: String,
      required: false,
      default: 'http/ourimages/hero.png'
    }
  },
  Footer: {
    FooterText: {
      type: String,
      required: false,
      default: 'Whenever we need to add more fields, more queries, more steps in the business logic,'
    }
  }
})

const StaticModel = mongoose.model('Static', StaticSchema)

module.exports = {
  StaticModel

}
// module.exports = mongoose.model({'User',userSchema})
