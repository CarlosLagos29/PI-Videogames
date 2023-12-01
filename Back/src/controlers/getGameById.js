const axios = require("axios");
require("dotenv").config
const { API_KEY } = process.env;
const { Videogames, Genres } = require("../DB_conect");


const getGameById = async (req, res) => {
    const { id } = req.params
    try {
        if (isNaN(id)) {
            const gameDb = await Videogames.findAll({
                where: { id },
                include: [
                    {
                        model: Genres,
                    },
                ],
            });
            
            const parcedGamesDB = gameDb.map((game) => {
                let g = game.Genres.map((genre) => genre.name);
                return {
                  ...game.toJSON(),
                  Genres: g,
                };
              });
            
            return res.status(200).json(parcedGamesDB[0]);
        }
        else {
            const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            const gameSearched =
            {
                name: data.name,
                description: data.description_raw,
                plataforms: data.platforms.map((plataforma) => plataforma.platform.name),
                image: data.background_image,
                released: data.released,
                rating: data.rating,
                Genres: data.genres.map((g) => g.name)
            };
            return res.status(200).json(gameSearched);
        }

    } catch (error) {
        return res.status(500).json(error.message);

    }

}

module.exports = { getGameById }