const {
  InfoModel,
  InfoValidate
} = require('../Models/HomePageSetting/OurInfoSchema')
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
    .json(Info)
}

// creating a new Info
const createInfo = async(req,res)=>{
  try {
    const { error } = InfoValidate(req.body)
  if(error) 
     return   res.status(301).send(error.message)

     const Infor = await InfoModel.find().sort({_id: -1 }).limit(1)
      if(Infor){
        await InfoModel.findByIdAndUpdate(Infor[0]._id, req.body, { new: true });
        res.status(201).send({ status: true, message: 'successfully updated' });
      }
      else{
         
          const Infopos= new InfoModel(req.body) 
          await Infopos.save();
          res.status(200).send({status:true, message:"New About Successfully Posted",Infopos:Infopos})
          //    catch (error) {
          //       res.status(400).send(error.message)
          //   }
      }
  }
   catch (error) {
      res.status(400).send(error.message)
  }
    
  }
exports.createInfo = createInfo
exports.getInfo = getInfo
