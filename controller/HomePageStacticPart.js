const { StaticModel } = require('../Models//HomePageSetting/StaticPartsHomePageSchema')
const HttpError = require('../Models/http-error')
const getStatic = async (req, res, next) => {
  let Static
  try {
    Static = await StaticModel.find()
  } catch (err) {
    const error = new HttpError(
      'Fetching Static Failed.'
    )
    return next(error)
  }
  res.status(200).json({ Static: Static.map(Static => Static.toObject({ getters: true })) })
}
const getStaticById = async (req, res, next) => {
  const StaticId = req.params._id // { pid: 'p1' }
  let Static
  try {
    Static = await StaticModel.findById(StaticId).exec()
  } catch (err) {
    const error = new HttpError(
      'Fetching Static Failed.'
    )
    return next(error)
  }

  if (!Static) {
    return res.status(404).send('Static Not Found')
  }

  res.status(200).json({ Static: Static.toObject({ getters: true }) }) // => { place } => { place: place }
}

const createStatic = async (req, res, next) => {
  try {
    const Static = new StaticModel(req.body)
    res.status(201).send({
      status: 'Success',
      message: 'New Post Added Successfully',
      info: Static
    })
    await Static.save()
  } catch (err) {
    const error = new HttpError(
      'Creating new post Failed.'
    )
    return next(error)
  }
}
const PutStatic = async (req, res, next) => {
  try {
    const Static = await StaticModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: Static
    })
  } catch (err) {
    const error = new HttpError(
      'Updating Static Failed.'
    )
    return next(error)
  }
}
exports.getStaticById = getStaticById
exports.createStatic = createStatic
exports.getStatic = getStatic
exports.PutStatic = PutStatic
