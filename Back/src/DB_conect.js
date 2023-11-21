require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const videogamesModel = require("./models/Videogame");
const genresModel = require("./models/Genres");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/games`,{ logging: false, native: false });

videogamesModel(sequelize);
genresModel(sequelize);

const{Genres, Videogames} = sequelize.models;

Genres.belongsToMany(Videogames,{through: 'Genres_videogames'})
Videogames.belongsToMany(Genres,{through: 'Genres_videogames'})

module.exports = {
    conn: sequelize,
    Genres,
    Videogames
}