require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//sirvo contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Portfolio Dario Silva",
    name: "Dario Silva",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Portfolio Dario Silva",
  });
});

app.get("/proyectos", (req, res) => {
  res.render("projects", {
    title: "Portfolio Dario Silva",
  });
});

app.listen(port, () => {
  console.log(`App listeninng at http://localhost:${port}`);
});
