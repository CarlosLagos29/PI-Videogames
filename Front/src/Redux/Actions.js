import {
    GET_ALL_VIDEOGAMES,
    GET_GAMES_BYID,
    GET_GAMES_BY_NAME,
    POST_VIDEOGAME,
    OREDER_ALPH, ORDER_RATING,
    FILTER_GENRES, FILTER_ORGIN,
    PAGES
} from "./Actions-types"
import axios from "axios";


export const getAllVideogames = () => {
    const endpoint = "http://localhost:3001/videogames/games";
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            dispatch({ type: GET_ALL_VIDEOGAMES, payload: data })

        } catch (error) {
            console.log(error.message);
        }
    }
}

export const page = (value) =>{
    return { type: PAGES , payload: value}
}