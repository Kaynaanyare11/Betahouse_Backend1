const { AboutModel, AboutValidate } = require('../Models/AboutSchema')
const HttpError = require('../Models/http-error')
const getAbout = async (req, res, next) => {
  let About
  try {
    About = await AboutModel.find()
  } catch (err) {
    const error = new HttpError(
      'Fetching About Failed.'
    )
    return next(error)
  }
  res.status(200).json(About)
}

//fetching about by id
const getAboutById = async (req, res, next) => {
  const AboutId = req.params._id 
  let About
  try {
    About = await AboutModel.findById(AboutId).exec()
  } catch (err) {
    const error = new HttpError(
      'Fetching About Failed.'
    )
    return next(error)
  }

  if (!About) {
    return res.status(404).send('About Not Found')
  }

  res.json(About)
}


//create a new record
const createAbout = async (req, res, next) => {
  try {

    //Validation 
    const { error } = AboutValidate(req.body)
    if (error) return res.send(error.message)
    const About = new AboutModel(req.body)
    res.status(201).send({
      status: 'Success',
      message: 'New Post Added Successfully',
      info: About
    })
    await About.save()
  } catch (err) {
    const error = new HttpError(
      'Creating About Failed.'
    )
    return next(error)
  }
}

//update 
const PutAbout = async (req, res, next) => {
  try {
    const About = await AboutModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: About
    })
  } catch (err) {
    const error = new HttpError(
      'Updating About Failed.'
    )
    return next(error)
  }
}
exports.getAboutById = getAboutById
exports.createAbout = createAbout
exports.getAbout = getAbout
exports.PutAbout = PutAbout
