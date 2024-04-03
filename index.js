// IMPORTING
const express = require("express");
const app = express();

// PORT
const PORT = process.env.PORT || 3333;

// BASIC SETTINGS

// templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

// om public zichtbaar te maken
app.use(express.static("public"));

// .ENV FILE
const dotenv = require("dotenv");
dotenv.config();

// API
//
//

// ROUTING
app.get("/home", (req, res) => {
    console.log(req.query);
    res.render("index", { title: "Homety" });
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
// app.listen(PORT, () => {
//     console.log("App running on port", PORT);
// });
