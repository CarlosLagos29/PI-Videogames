require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Genres } = require("../DB_conect");

const getGenders = async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)

        const gens = data.results.map(({ id, name }) => {
            return {
                id,
                name
            }
        })
        const genresDB = await Genres.findAll()
        if (!genresDB.length) {
            await Genres.bulkCreate(gens)
            return res.status(200).json(gens);
        }
        else { res.status(200).json(genresDB) }
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { getGenders }