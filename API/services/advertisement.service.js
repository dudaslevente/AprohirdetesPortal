const { Advertisement } =  require('../models/advertisement.model')

exports.advertisements = async () => {
    return await Advertisement.findAll();
}
