const express = require('express');
const routes = express.Router();

const { getVideogames } = require("../controlers/getVideogames");
const {getGameById} = require("../controlers/getGameById")
const {getGenders} = require("../controlers/getGenres")

routes.get("/games",getVideogames);
routes.get("/games/:id",getGameById)
routes.get("/genres",getGenders)

module.exports= {routes};