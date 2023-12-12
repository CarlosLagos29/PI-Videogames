require('dotenv').config();
const { Videogames, Genres } = require("../DB_conect");

const postVideogame = async (req, res) => {
  try {
    const { name, description, plataforms, image, released, rating, genres } = req.body;

    if (!name || !description || !plataforms || !image || !released || !rating || !genres) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const [game, created] = await Videogames.findOrCreate({
      where: { name: name },
      defaults: {
        description: description,
        plataforms: plataforms,
        image: image,
        released: released,
        rating: rating
      },
    });
    
    const generDB = await Genres.findAll({ where: { name: genres } });
    
    if (generDB.length > 0) {

      await game.addGenres(generDB);
    
    } else {
      return res.status(404).json({ message: `Genres: ${genres.join(", ")}  not found` });
    }
    
    
    return res.status(200).json(game);
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { postVideogame };