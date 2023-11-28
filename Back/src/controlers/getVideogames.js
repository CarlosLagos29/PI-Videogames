require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames } = require("../DB_conect");



const getVideogames = async (req, res) => {
  try {
    let games = [];
    let page = 1;

    while (games.length < 100) {
      const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);

      const nombresDeJuegos = data.results.map((game) => {
        return {
          id : game.id,
          name: game.name,
          plataforms: game.platforms.map((plataforma) => plataforma.platform.name),
          image: game.background_image,
          release: game.released,
          rating: game.rating,
          Genres: game.genres.map((g) => g.name)
        };
      });
      games.push(...nombresDeJuegos);
      page += 1;
    }
    const gamesBD = await Videogames.findAll();
    games = [...gamesBD,...games];

    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { getVideogames }
