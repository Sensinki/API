// IMPORTING
const express = require("express");
const app = express();
const axios = require("axios");

// .ENV FILE
const dotenv = require("dotenv");
dotenv.config();

// PORT
const PORT = process.env.PORT || 3333;

// BASIC SETTINGS
// API key
const apiKey = process.env.TMDB_API_KEY;
console.log("Loaded API Key:", process.env.TMDB_API_KEY);

// templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

// om public zichtbaar te maken
app.use(express.static("public"));

// ROUTING
app.get("/", async (req, res) => {
    const airingToday = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`).then((res) => res.json());

    const movieData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`).then((res) => res.json());

    const trendingData = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`).then((res) => res.json());

    // console.log(movieData, trendingData);
    res.render("pages/index", { title: "TEST", movies: movieData.results, trendingMovies: trendingData.results, airingToday: airingToday.results });
});

// DETAIL MOVIE
app.get("/movie/:id/", async (req, res) => {
    const movieId = req.params.id;

    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`).then((res) => res.json());
    const similarData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`).then((res) => res.json());


    res.render("pages/detail", { title: "Detail", movie: movie, similarMovies: similarData.results });
});

// Define a route to handle API requests
app.get("/search", async (req, res) => {
    const query = req.query.q;
    try {
        const searchResults = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`).then((res) => res.json());
        res.render("pages/search", { title: "Search Results", query, movies: searchResults.results });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data from the API");
    }
});

// JSON to check the data adress
app.get("/movies-json", async (req, res) => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    console.log("API URL:", apiUrl);

    try {
        const response = await axios.get(apiUrl);
        console.log("API request successful");
        const movies = response.data.results;
        res.json(movies);
        // res.render("pages/index", { title: "TEST", movies: movies });
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ error: error.message });
    }
});

// ROUTE ERROR(404) PAGINA
app.use(function (req, res) {
    res.locals.title = "Error 404";
    res.status(404).render("pages/404", {
        path: "Error",
    });
});

// PORT
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
