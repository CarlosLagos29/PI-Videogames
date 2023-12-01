require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames,Genres } = require("../DB_conect");
const { Op } = require('sequelize');

const getGameByName = async (req, res) => {
    const { name } = req.query;
    try {
        const gamesDb = await Videogames.findAll({
            where: {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            },
            include: [
              {
                model: Genres,
              },
            ],
          });
          
          const parcedGamesDB = gamesDb.map((game) => {
            let g = game.Genres.map((genre) => genre.name);
            return {
              ...game.toJSON(),
              Genres: g,
            };
          });

        const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        const games = data.results.map((game) =>{        
         return {
            id : game.id,
            name: game.name,
            plataforms: game.platforms.map((plataforma) => plataforma.platform.name),
            image: game.background_image,
            release: game.released,
            rating: game.rating,
            Genres: game.genres.map((g) => g.name)
          }})

        const allGames = [...parcedGamesDB,...games];
        return res.status(200).json(allGames);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { getGameByName }