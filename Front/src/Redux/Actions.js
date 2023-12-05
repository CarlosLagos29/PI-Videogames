import {
    GET_ALL_VIDEOGAMES,
    GET_GAMES_BY_ID,
    GET_GAMES_BY_NAME,
    GET_GENRES,
    POST_VIDEOGAME,
    ORDER_ALPH, ORDER_RATING,
    FILTER_GENRES, FILTER_ORIGIN,
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

export const getGenres = () => {
    const endpoint = "http://localhost:3001/videogames/genres"
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            dispatch({ type: GET_GENRES, payload: data })

        } catch (error) {
            console.log(error.message);
        }
    }
}

export const postVideogame = (gameData) => {
    const endpoint = "http://localhost:3001/videogames/add"
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, gameData);
            dispatch({ type: POST_VIDEOGAME, payload: data })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getGamesByName = (value) => {
    const endpoint = `http://localhost:3001/videogames/search?name=${value}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            dispatch({ type: GET_GAMES_BY_NAME, payload: data })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const page = (value) => {
    return { type: PAGES, payload: value }
}

export const orderAlph = (value) => {
    return { type: ORDER_ALPH, payload: value }
}

export const orderRating = (value) => {
    return { type: ORDER_RATING, payload: value }
}

export const filterOrigin = (value) => {
    return { type: FILTER_ORIGIN, payload: value }
}

export const filterGender = (value) => {
    return { type: FILTER_GENRES, payload: value }
}

