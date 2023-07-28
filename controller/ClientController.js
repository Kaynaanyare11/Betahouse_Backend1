const { ClientModel, ClientValidate } = require('../Models/HomePageSetting/ClientSchema')
const HttpError = require('../Models/http-error')
const getClient = async (req, res, next) => {
  let Client
  try {
    Client = await ClientModel.find()
  } catch (err) {
    const error = new HttpError(
      'Fetching Client Failed.'
    )
    return next(error)
  }
  res.status(200).json({ Client: Client.map(Client => Client.toObject({ getters: true })) })
}
const getClientById = async (req, res, next) => {
  const ClientId = req.params._id // { pid: 'p1' }
  let Client
  try {
    Client = await ClientModel.findById(ClientId).exec()
  } catch (err) {
    const error = new HttpError(
      'Fetching Client Failed.'
    )
    return next(error)
  }

  if (!Client) {
    return res.status(200).send('Client Not Found')
  }

  res.json({ Client: Client.toObject({ getters: true }) }) // => { place } => { place: place }
}

const createClient = async (req, res, next) => {
  try {
    const { error } = ClientValidate(req.body)
    if (error) return res.send(error.message)
    const Client = new ClientModel(req.body)
    res.status(201).send({
      status: 'Success',
      message: 'New Post Added Successfully',
      info: Client
    })
    await Client.save()
  } catch (err) {
    const error = new HttpError(
      'Creating Client Failed.'
    )
    return next(error)
  }
}
const PutClient = async (req, res, next) => {
  try {
    const Client = await ClientModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: Client
    })
  } catch (err) {
    const error = new HttpError(
      'Updating Client Failed.'
    )
    return next(error)
  }
}
exports.getClientById = getClientById
exports.createClient = createClient
exports.getClient = getClient
exports.PutClient = PutClient
