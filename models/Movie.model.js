const {Schema, model} = require("mongoose");
const movie = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
});

const MovieModel = model("movie", movie);
module.exports = MovieModel;