const express = require('express');
const routes = express.Router();

const { getVideogames } = require("../controlers/getVideogames");
const { getGameById } = require("../controlers/getGameById");
const { getGameByName } = require("../controlers/getGameByName");
const { postVideogame } = require("../controlers/postVideogame");
const { getGenders } = require("../controlers/getGenres")

routes.get("/games", getVideogames);
routes.get("/games/:id", getGameById);
routes.get("/search", getGameByName);
routes.post("/add", postVideogame);
routes.get("/genres", getGenders)

module.exports = { routes };