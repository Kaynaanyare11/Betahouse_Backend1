const { ImagesModel, ImagesValidate } = require('../Models/ImagesSchema')
const HttpError = require('../Models/http-error')
const getImages = async (req, res, next) => {

  let Images
  try {
    Images = await ImagesModel.find()
  } catch (err) {
    console.log(err.message)
    // const error = new HttpError(
    //   'Fetching Images Failed.'
    // )
    // return next(error)
  }

  res.status(200).json(Images)
}
const getImagesById = async (req, res, next) => {
  const ImagesId = req.params._id // { pid: 'p1' }
  let Images
  try {
    Images = await ImagesModel.findById(ImagesId).exec()
  } catch (err) {
    const error = new HttpError(
      'Fetching image Failed.'
    )
    return next(error)
  }

  if (!Images) {
    return res.status(404).send('Images Not Found')
  }

  res.status(200).json({ Images: Images.toObject({ getters: true }) }) // => { place } => { place: place }
}

const createImages = async (req, res, next) => {
  try {
    const { error } = ImagesValidate(req.body)
    if (error) return res.send(error.message)
    const Images = new ImagesModel(req.body)
    res.send({
      status: 'Success',
      message: 'New Post Added Successfully',
      info: Images
    })
    await Images.save()
  } catch (err) {
    const error = new HttpError(
      'Creating New Image Failed.'
    )
    return next(error)
  }
}
const PutImages = async (req, res, next) => {
  try {
    const Images = await ImagesModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: Images
    })
  } catch (err) {
    const error = new HttpError(
      'Updating Images Failed.'
    )
    return next(error)
  }
}
exports.getImagesById = getImagesById
exports.createImages = createImages
exports.getImages = getImages
exports.PutImages = PutImages
