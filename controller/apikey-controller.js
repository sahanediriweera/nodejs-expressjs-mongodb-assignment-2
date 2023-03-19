const APIKEY = require('../model/apikeys');

const addAPIKey = async(req,res,next)=> {
    try{
        const apikey = '123456789';
        const thekey = new APIKEY({apikey});
        await thekey.save();
        res.status(201).json(apikey);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

exports.addAPIKey = addAPIKey;