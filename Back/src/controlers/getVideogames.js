require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");


const getVideogames = async (req, res) => {
  try {
    const games = [];
    let page = 1;

    while (games.length < 100) {
      const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);

      const nombresDeJuegos = data.results.map((game) => {
        return {
          name: game.name,
          description: game.description_raw,
          plataforms: game.platforms.map((plataforma) => plataforma.platform.name),
          image: game.background_image,
          release: game.released,
          rating: game.rating,
          genres: game.genres.map((g) => g.name)
        };
      });
      games.push(...nombresDeJuegos);
      page += 1;
    }

    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { getVideogames }
