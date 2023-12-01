require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Genres } = require("../DB_conect");

const getGenders = async (req,res) => {
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
        else { return res.status(200).json(genresDB) }
}

module.exports = { getGenders }