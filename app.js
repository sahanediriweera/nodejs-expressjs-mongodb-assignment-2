const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/movie-route');
const APIKEY = require('./model/apikeys');
const app = express();


app.use(express.json());

app.use('/movies',router);
app.use('/apis',async (req,res)=>{
    var apikey = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var Length = characters.length;
    for (var i = 0; i < 10; i++) {
        apikey += characters.charAt(Math.floor(Math.random() * Length));
      }

    try{
        const key = new APIKEY({apikey});
        await key.save();
        return res.status(201).json({key});
    }catch(err){
        return res.status(500).json({messsage:err.messsage});
    }

})

mongoose.connect('mongodb+srv://user1:cu7Rs2li2fSwhABR@cluster0.lhpjqqu.mongodb.net/?retryWrites=true&w=majority')
.then(
    ()=> app.listen(3000,()=>console.log("Connected to port 5000"))
)
.catch((err)=>console.log(err));