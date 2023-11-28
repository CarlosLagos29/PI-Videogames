const axios = require("axios");
require("dotenv").config
const { API_KEY } = process.env;

const getGameByGenres = async (req, res) => {
  const { genres } = req.params;

  try {
      let games = [];
      let page = 1;

      while (games.length < 10) {
          const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);
          
          const gamePerGender = data.results.filter((game) => {
              return game.genres?.includes(genres);
          });

          const apiGames = gamePerGender.map((game) => ({
              id: game.id,
              name: game.name,
              platforms: game.platforms.map((platform) => platform.platform.name),
              image: game.background_image,
              release: game.released,
              rating: game.rating,
              genres: game.genres.map((g) => g.name),
          }));

          games.push(...apiGames);
          page += 1;
      } 
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { getGameByGenres }