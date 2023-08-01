const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const housesRouter = require('./routes/houses')
const usersRouter = require('./routes/users')
const ImagesRouter = require('./routes/Images')
const InfoRouter = require('./routes/Info')
const GalaryRouter = require('./routes/Galary')
const ClientRouter = require('./routes/Client')
const ServiseRouter = require('./routes/Services')
const AboutRouter = require('./routes/About')
const HomePageStaticPartsRouter = require('./routes/HomePageStaticPart')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({origin:'http://localhost:5173',origin:'https://betahouse-front-end.vercel.app'}))
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_URL).then(() => {
  console.log('Connected!')
}).catch((err) => {
  console.log(err)
}
)
app.get('/', (req, res) => {
  res.json('hi')
})
app.use('/houses', housesRouter)
app.use('/users', usersRouter)
app.use('/images', ImagesRouter)
app.use('/info', InfoRouter)
app.use('/gallery', GalaryRouter)
app.use('/client', ClientRouter)
app.use('/service', ServiseRouter)
app.use('/about', AboutRouter)
app.use('/herosection&footer', HomePageStaticPartsRouter)

// const connectiondb = async () => {
//   const createServer = await MongoMemoryServer.create()
//   await mongoose.connect(createServer.getUri(), { dbName: 'Betahouse' })
//     .then(() => console.log('Connected!')).catch((err) => {
//       console.log(err)
//     }
//     )
// }
// connectiondb()
// mongoose.set('strictQuery', false)
// mongoose.connect('mongodb://127.0.0.1:27017/BetaHouse')
//   .then(() => console.log('Connected!')).catch((err) => {
//   console.log(err);
// }
// );
const Port=process.env.PORT
app.listen(Port);
console.log('Connected to this',Port)
module.exports = app
