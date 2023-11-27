const express = require('express');
const routes = express.Router();

const { getVideogames } = require("../controlers/getVideogames");
const { getGameById } = require("../controlers/getGameById");
const { getGenders } = require("../controlers/getGenres");
const { getGameByName } = require("../controlers/getGameByName");
const { postVideogame } = require("../controlers/postVideogame")

routes.get("/games", getVideogames);
routes.get("/games/:id", getGameById);
routes.get("/genres", getGenders);
routes.get("/search", getGameByName);
routes.post("/add", postVideogame);

module.exports = { routes };