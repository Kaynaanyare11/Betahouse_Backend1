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
const createAbout = async(req,res)=>{
  try {
    const { error } = AboutValidate(req.body)
  if(error) 
     return   res.status(301).send(error.message)

      const About=await AboutModel.find().sort({_id: -1}).limit(1)
      if(About){
          const updates= await AboutModel.findByIdAndUpdate(About[0]._id,{
             
            FewDescription:req.body.FewDescription,
            MoreDescription:req.body.MoreDescription
          },{new:true})
          res.status(200).send({updates})
      }
      else{
         
          const Aboutpos= new AboutModel(req.body) 
          await Aboutpos.save();
          res.status(200).send({status:true, message:"New About Successfully Posted",Aboutpos:Aboutpos})
          //    catch (error) {
          //       res.status(400).send(error.message)
          //   }
      }
  }
   catch (error) {
      res.status(400).send(error.message)
  }
    
  }

exports.getAboutById = getAboutById
exports.createAbout = createAbout
exports.getAbout = getAbout
