const axios = require("axios");
require("dotenv").config
const { API_KEY } = process.env;

const getGameByGenres = async (req, res) => {
  const { gen } = req.params;

  try {
    let games = [];
    let page = 1;
    
    while (games.length < 10) {
       
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

        const filtered = nombresDeJuegos.filter((game)=> game.Genres === gen);

        games.push(...filtered)
        
        page += 1;
    }
    
   return res.status(200).json(games)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { getGameByGenres }