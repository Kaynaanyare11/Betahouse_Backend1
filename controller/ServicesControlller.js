const {
  ServiseModel,
  ServiseValidate
} = require('../Models/ServisesSchema')
const HttpError = require('../Models/http-error')
const getService = async (req, res, next) => {
  let Service
  try {
    Service = await ServiseModel.find()
  } catch (err) {
    const error = new HttpError('Fetching Service Failed.')
    return next(error)
  }
  res.status(200).json({
    Service: Service.map((Service) => Service.toObject({ getters: true }))
  })
}
const getServiceById = async (req, res, next) => {
  const ServiceId = req.params._id // { pid: 'p1' }
  let Service
  try {
    Service = await ServiseModel.findById(ServiceId).exec()
  } catch (err) {
    const error = new HttpError('Fetching Service Failed.')
    return next(error)
  }

  if (!Service) {
    return res.status(404).send('Service Not Found')
  }

  res.status(200).json({ Service: Service.toObject({ getters: true }) }) // => { place } => { place: place }
}

const createService = async (req, res, next) => {
  try {
    const { error } = ServiseValidate(req.body)
    if (error) return res.send(error.message)
    const Service = new ServiseModel(req.body)
    res.send({
      status: 'Success',
      message: 'New Post Added Successfully',
      info: Service
    })
    await Service.save()
  } catch (err) {
    const error = new HttpError('Createing new service Failed.')
    return next(error)
  }
}
const PutService = async (req, res, next) => {
  try {
    const Service = await ServiseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: Service
    })
  } catch (err) {
    const error = new HttpError('Updating Service Failed.')
    return next(error)
  }
}
const DeleteService = async (req, res) => {
  const deletingById = await ServiseModel.findByIdAndRemove(req.params.id)
  res.send({ status: 'Success', message: `this House ${deletingById} Deleted successfully` })
}
exports.getServiceById = getServiceById
exports.createService = createService
exports.getService = getService
exports.PutService = PutService
exports.DeleteService = DeleteService
