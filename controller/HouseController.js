const { HouseModel, HouseValidate } = require('../Models/HouseSchema')
const HttpError = require('../Models/http-error')
// Get All Houses
const getHouses = async (req, res, next) => {
  let houses
  try {
    houses = await HouseModel.find()
  } catch (err) {
    const error = new HttpError(
      'Fetching Houses Failed.'
    )
    return next(error)
  }

  res.status(200).json({ houses: houses.map(house => house.toObject({ getters: true })) })
}

// Get Houses By Id
const getHouseById = async (req, res, next) => {
  const HouseId = req.params._id
  let house
  try {
    house = await HouseModel.findById(HouseId).exec()
  } catch (err) {
    const error = new HttpError(
      'Fetching of this house id Failed.'
    )
    return next(error)
  }

  if (!house) {
    return res.status(404).send('House Not Found')
  }

  res.status(200).json({ house: house.toObject({ getters: true }) }) // => { place } => { place: place }
}
// creating a new House
const createHouse = async (req, res, next) => {
  try {
    const { error } = HouseValidate(req.body)
    if (error) return res.send(error.message)
    const House = new HouseModel(req.body)
    res.status(201).send({
      status: 'Success',
      message: 'New Post Added Successfully',
      info: House
    })
    await House.save()
  } catch (err) {
    const error = new HttpError(
      'Creating New House Failed.'
    )
    return next(error)
  }
}
// Update Of houses
const PutHouse = async (req, res, next) => {
  try {
    const House = await HouseModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: House
    })
  } catch (err) {
    const error = new HttpError(
      'Updating House Failed.'
    )
    return next(error)
  }
}
const DeleteHouse = async (req, res) => {
  const deletingById = await HouseModel.findByIdAndRemove(req.params.id)
  res.send({ status: 'Success', message: `this House ${deletingById} Deleted successfully` })
}
exports.getHouseById = getHouseById
exports.createHouse = createHouse
exports.getHouses = getHouses
exports.PutHouse = PutHouse
exports.DeleteHouse = DeleteHouse
