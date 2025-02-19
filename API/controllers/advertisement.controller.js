const advertisementService = require('../services/advertisement.service.js')

exports.advertisements = async(_req, res, next) =>{
    try{
        const advertisements = await advertisementService.advertisements();
        res.status(200).json({success: true, advertisements: advertisements})
    }
    catch(err){
        next(err);
    }
}