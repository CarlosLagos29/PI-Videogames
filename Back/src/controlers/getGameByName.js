require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames } = require("../DB_conect");
const { Op } = require('sequelize');

const getGameByName = async (req, res) => {
    const { name } = req.query;
    try {
        const gamesDb = await Videogames.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }

            },
            attributes: ['name']
        })
        const gamesDbnames = gamesDb.map((g) => g.name)
        const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        const games = data.results.map((g) => g.name)

        const allGames = [...gamesDbnames,...games];
        return res.status(200).json(allGames);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { getGameByName }