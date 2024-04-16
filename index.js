// IMPORTING
const express = require("express");
const app = express();
const axios = require("axios");

// PORT
const PORT = process.env.PORT || 3333;

// .ENV FILE
const dotenv = require("dotenv");
dotenv.config();

// BASIC SETTINGS

// api_key
const apiKey = process.env.TMDB_API_KEY;
// console.log("API Key:", apiKey); // Check if API key is loaded correctly
console.log("Loaded API Key:", process.env.TMDB_API_KEY);

// const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
// console.log("API URL:", apiUrl);

// templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

// om public zichtbaar te maken
app.use(express.static("public"));

// API
//
//

// ROUTING
app.get("/", async (req, res) => {
    const movieData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`).then((res) => res.json());
    const trendingData = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`).then((res) => res.json());
    console.log(movieData, trendingData);
    res.render("pages/index", { title: "TEST", movies: movieData.results, trendingMovies: trendingData.results });
});

// DETAIL MOVIE
app.get("/movie/:id/", async (req, res) => {
    const movieId = req.params.id;

    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`).then((res) => res.json());
    res.render("pages/detail", { title: "Detail", movie: movie });
});

// got help from chatGPT
// app.get("/movies", async (req, res) => {

// });

// JSON FOR DISCOVER
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

app.get("/movie", async (req, res) => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
    };

    fetch(url, options)
        .then((res) => res.json())
        .then((trendingJson) => {
            console.log(trendingJson);
            res.render("pages/index.ejs");
        })
        .catch((err) => console.error("error:" + err));
});

app.get("/about", (req, res) => {
    res.send("About");
});

// app.get("/:id", (req, res) => {
//     res.send(req.params.id);
// });

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

// LAATSTE ROUTE ERROR(404) PAGINA
// app.get("/*", (req, res) => {
//     res.status(404).render("pages/404", { title: "404" });
// });

app.use(function (req, res) {
    res.locals.title = "Error 404";
    res.status(404).render("pages/404", {
        path: "Error",
    });
});

// PORT
// app.listen(PORT, () => {
//     console.log("App running on port", PORT);
// });
