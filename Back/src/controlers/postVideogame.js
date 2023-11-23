require('dotenv').config();
const { Videogames, Genres } = require("../DB_conect")

const postVideogame = async (req, res) => {
  try {
    const { id, name, description, plataforms, image, released, rating } = req.body;
    if (!id || !name || !description || !plataforms || !Array.isArray(plataforms) || !image || !released || !rating) {
        return res.status(400).json({ error: 'Datos de entrada no válidos' });
    }
    
    const [game, created] = await Videogames.findOrCreate({
      where: { id : id },
      defaults: {
        name:name,
        description:description,
        plataforms:plataforms,
        image:image,
        released:released,
        rating:rating
      },
      include: Genres
    });

    return res.status(200).json({created,game});
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
};

module.exports = { postVideogame};