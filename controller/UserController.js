const { UserModel } = require('../Models/UserSchema')
const HttpError = require('../Models/http-error')
const bcrypt = require('bcrypt')
const getUsers = async (req, res, next) => {
  let users
  try {
    users = await UserModel.find({}, '-password')
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.'
    )
    return next(error)
  }
  res
    .status(200)
    .json({ users: users.map((user) => user.toObject({ getters: true })) })
}

const signup = async (req, res, next) => {
  const password = req.body.password
// let UserExsists = await UserModel.findOne(req.body.email)
//   if(UserExsists)
//   {
//     return res.send("This User already exists")
//   }
  let hashedPassword
  try {
    hashedPassword = await bcrypt.hash(password, 12)
  } catch (err) {
    return res.send(err.message)
  }

  const createdUser = new UserModel(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      Roles: req.body.Roles,
      Status: req.body.Status
    }
  )

  try {
    await createdUser.save()
  } catch (err) {
    const error = new HttpError('Creating New User Failed')
    return next(error)
  }

  res.status(201).send(createdUser)
}

const DeleteUser = async (req, res) => {
  const deletingById = await UserModel.findByIdAndRemove(req.params.id)
  res.send({ status: 'Success', message: `${deletingById.name} Deleted successfully` })
}

exports.getUsers = getUsers
exports.signup = signup
exports.DeleteUser = DeleteUser
