import {
    GET_ALL_VIDEOGAMES,
    GET_GAMES_BYID,
    GET_GAMES_BY_NAME,
    POST_VIDEOGAME,
    OREDER_ALPH, ORDER_RATING,
    FILTER_GENRES, FILTER_ORGIN,
    PAGES
} from "./Actions-types"

const initialState = {
    allVideogames: [],
    gamesPerPage: 10,
    currentPage: 1,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload
            }
        case PAGES:
            if (!isNaN(action.payload)) {
                return {
                    ...state,
                    currentPage: parseInt(action.payload),
                }
            }
            if (action.payload === "Previus") {
                return {
                    ...state,
                    currentPage: state.currentPage - 1,
                }
            }
            if (action.payload === "Next") {
                return {
                    ...state,
                    currentPage: state.currentPage + 1,
                }
            }
        default: return { ...state }
    }
}


export default Reducer;