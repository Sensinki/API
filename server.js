// IMPORTING
const express = require("express");
const app = express();
// templating engine
const { engine } = require("ejs");


// PORT
const PORT = process.env.PORT || 4000;

// BASIC SETTINGS

// om static zichtbaar te maken (behulp van Ivo)
app.use(express.static("static"));
app.engine("ejs", engine({ defaultLayout: "main" }));
app.set("view engine", "ejs");
app.set("views", "./views");


// .ENV FILE
const dotenv = require("dotenv");
dotenv.config();

// API


// ROUTES

app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});

// LAATSTE ROUTE ERROR(404) PAGINA
app.get("/*", (req, res) => {
    res.status(404).render("404", { title: "404" });
});

app.use(function (req, res) {
    res.locals.title = "Error 404";
    res.status(404).render("404", {
        path: "Error",
    });
});

// PORT
app.listen(PORT, () => {
    console.log("App running on port", PORT);
});
