const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movie = new Schema({
    title:{
        required:true,
        type:String,
    },
    Year:{
        required:true,
        type:String,
    },
    Rated:{
        required:true,
        type:String,
    },
    Released:{
        required:true,
        type:String,
    },
    Genre:{
        required:true,
        type:String,
    },
});

module.exports = mongoose.model("Movie",movie);