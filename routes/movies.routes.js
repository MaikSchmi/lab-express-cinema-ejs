const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

router.get("/movies", async (req, res, next) => {
    try {
        const allMovies = await MovieModel.find();
        res.render("movies/movies", {allMovies: allMovies});
    } catch (error) {
        console.log("Error in Movies List: ", error);
    }
});

router.get("/movies/:id", async (req, res, next) => {
    try{
        const movie = await MovieModel.findById(req.params.id);
        res.render("movies/movie-details", {movie: movie});
    } catch (error) {
        console.log("Error in Movies / ID (GET): ", error);
    }
});

module.exports = router;