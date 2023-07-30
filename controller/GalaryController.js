const { GalaryModel, GalaryValidate } = require('../Models/HomePageSetting/GalarySchema')
const HttpError = require('../Models/http-error')
const getGalary = async (req, res, next) => {
  let Galary
  try {
    Galary = await GalaryModel.find()
  } catch (err) {
    const error = new HttpError(
      'Fetching Galary Failed.'
    )
    return next(error)
  }
  res.status(200).json({ Galary: Galary.map(Galary => Galary.toObject({ getters: true })) })
}
const getGalaryById = async (req, res, next) => {
  const GalaryId = req.params._id // { pid: 'p1' }
  let Galary
  try {
    Galary = await GalaryModel.findById(GalaryId).exec()
  } catch (err) {
    const error = new HttpError(
      'Fetching Galary Failed.'
    )
    return next(error)
  }

  if (!Galary) {
    return res.status(404).send('Galary Not Found')
  }

  res.status(200).json({ Galary: Galary.toObject({ getters: true }) }) // => { place } => { place: place }
}

const createGalary = async (req, res, next) => {
  try {
    const { error } = GalaryValidate(req.body)
    if (error) return res.send(error.message)
    const Galary = new GalaryModel(req.body)
    res.status(201).send({
      status: 'Success',
      message: 'New Post Added Successfully',
      info: Galary
    })
    await Galary.save()
  } catch (err) {
    const error = new HttpError(
      'Creating Galary Failed.'
    )
    return next(error)
  }
}
const PutGalary = async (req, res, next) => {
  try {
    const Galary = await GalaryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: Galary
    })
  } catch (err) {
    const error = new HttpError(
      'Updating Galary Failed.'
    )
    return next(error)
  }
}
const DeleteGallery = async (req, res) => {
  const deletingById = await GalaryModel.findByIdAndRemove(req.params.id)
  res.send({ status: 'Success', message: `this House ${deletingById} Deleted successfully` })
}
exports.getGalaryById = getGalaryById
exports.createGalary = createGalary
exports.getGalary = getGalary
exports.PutGalary = PutGalary
exports.DeleteGallery = DeleteGallery
