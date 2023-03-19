const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiSchema = new Schema({
    apikey:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('APIKEY',apiSchema);