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
  // let existingUser;
  // try {
  //   existingUser = await UserModel.findOne({ email: email });
  // } catch (err) {
  //     return res.send(err.message);
  // }

  // if (existingUser) {
  //     return res.send(err.message);
  // }

  let hashedPassword
  try {
    hashedPassword = await bcrypt.hash(password, 12)
  } catch (err) {
    return res.send(err.message)
  }

  const createdUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    Roles: req.body.Roles,
    Status: req.body.Status
  })

  try {
    await createdUser.save()
  } catch (err) {
    const error = new HttpError('Creating New User Failed')
    return next(error)
  }

  res.status(201).send(createdUser)
}

exports.getUsers = getUsers
exports.signup = signup
