const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    critics:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Review',reviewSchema);