const Movie = require('../model/movie');
const APIKEY = require('../model/apikeys');

const getAllmovies = async(req,res,next)=> {


    let movie;
    try{
        movie = await Movie.find();
    }catch(err){
        return next(err);
    }
    if(!movie){
        return res.status(500).json({message:"Internal Server error"});
    }

    return res.status(200).json({movie});
}

const addMovie = async(req,res,next)=> {
    try{
        const {title,Year,Rated,Released,Genre} = req.body;
        const movie = new Movie({
            title,
            Year,
            Rated,
            Released,
            Genre
        });
    
        await movie.save();
        res.status(201).json(movie);
    }catch(err){
        res.status(500).json({error:err.message});
    }

}

const searchMovies = async(req,res,next)=> {
    try{
        const apikey = req.query.apikey;

        const apiquery = await APIKEY.find({apikey:apikey})
    }catch(err){
        return res.status(500);
    }


    const title = req.query.t;
    const year = req.query.y;
    const query = {
        title: { $regex: title, $options: "i" },
        Year: year
    };

    try{
        const movies = await Movie.find(query);
    
        res.json(movies);
    }catch (err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
}


exports.getAllmovies = getAllmovies;
exports.addMovie = addMovie;
exports.searchMovies = searchMovies;