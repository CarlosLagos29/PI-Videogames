require('dotenv').config();
const { Videogames, Genres } = require("../DB_conect");
const generarUUID = require("../FnAuxiliares/GenerarUUID")

const postVideogame = async (req, res) => {
  try {
    const { name, description, plataforms, image, released, rating } = req.body;

    const id = generarUUID();

    const [game, created] = await Videogames.findOrCreate({
      where: { name: name },
      defaults: {
        id: id,
        description: description,
        plataforms: plataforms,
        image: image,
        released: released,
        rating: rating
      },
      include: Genres
    });

    return res.status(200).json({ created, game });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { postVideogame };