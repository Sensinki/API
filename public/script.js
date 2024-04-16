console.log("are you working?");

// Search button
const searchBox = document.getElementById("searchBox"),
    searchIcon = document.getElementById("searchIcon");

searchIcon.onclick = function () {
    searchBox.classList.toggle("active");
};

// TMDB fetching

// const API_KEY = "api_key=04625eb1806d881fb98867452db70e10";

// const TMDB_URL = "https://api.themoviedb.org/3/";
