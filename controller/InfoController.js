const {
  InfoModel,
  InfoValidate
} = require('../Models/HomePageSetting/StaticPartsHomePageSchema')
const HttpError = require('../Models/http-error')
// Get All Info
const getInfo = async (req, res, next) => {
  let Info
  try {
    Info = await InfoModel.find()
  } catch (err) {
    const error = new HttpError('Fetching Information Failed.')
    return next(error)
  }
  res
    .status(200)
    .json({ Info: Info.map((Info) => Info.toObject({ getters: true })) })
}

// creating a new Info
const createInfo = async (req, res, next) => {
  try {
    const { error } = InfoValidate(req.body)
    if (error) return res.send(error.message)
    const Info = new InfoModel(req.body)
    res.send({
      status: 'Success',
      message: 'New Post Added Successfully',
      info: Info
    })
    await Info.save()
  } catch (err) {
    const error = new HttpError('Creating New Information Failed.')
    return next(error)
  }
}
const PutInfo = async (req, res, next) => {
  try {
    const Info = await InfoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: Info
    })
  } catch (err) {
    const error = new HttpError('Updating Info Failed.')
    return next(error)
  }
}
exports.createInfo = createInfo
exports.getInfo = getInfo
exports.PutInfo = PutInfo
