const express = require('express');
const {getAllmovies, addMovie, searchMovies} = require('../controller/movie-controller');
const router = express.Router();


router.get('/',
    searchMovies
);
router.get('/all',getAllmovies);

router.post('/',addMovie);

module.exports = router;