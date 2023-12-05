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

const initialState = {
    allVideogames: [],
    copyOfAllvideogames: [],
    allgenres: [],
    copyOfGenres: [],
    gamesPerPage: 5,
    currentPage: 1,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload,
                copyOfAllvideogames: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                allgenres: action.payload,
                copyOfGenres: action.payload
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
        case ORDER_ALPH:
            const orderedGamesbyName = action.payload === "A" ?
                [...state.allVideogames].sort((a, b) => a.name > b.name ? 1 : -1)
                :
                action.payload === "Z" ?
                    [...state.allVideogames].sort((a, b) => b.name > a.name ? 1 : -1)
                    :
                    state.copyOfAllvideogames
            return {
                ...state,
                allVideogames: orderedGamesbyName
            }
        case ORDER_RATING:
            const orderedGamesbyRating = action.payload === "Lowest" ?
                [...state.allVideogames].sort((a, b) => a.rating - b.rating)
                :
                action.payload === "Highiest" ?
                    [...state.allVideogames].sort((a, b) => b.rating - a.rating)
                    :
                    state.copyOfAllvideogames
            return {
                ...state,
                allVideogames: orderedGamesbyRating
            }
        case FILTER_ORIGIN: {
            if (action.payload === "All") {
                return {
                    ...state,
                    allVideogames: state.copyOfAllvideogames
                };
            }
            state.allVideogames = state.copyOfAllvideogames;
            const filteredOrigin = state.allVideogames.filter((game) => {
                return action.payload === "API" ? !isNaN(game.id) : isNaN(game.id);
            });
            if (!filteredOrigin.length) return {
                ...state,
                allVideogames: "There are no games created at this time"
            };
            else {
                return {
                    ...state,
                    allVideogames: filteredOrigin
                }
            }
        }
        case FILTER_GENRES: {
            if (action.payload === "All genres") {
                return {
                    ...state,
                    allVideogames: state.copyOfAllvideogames
                };
            }
            const filteredGenres = state.allVideogames.filter((games) => games.Genres.includes(action.payload))
            if (filteredGenres.length) {
                return {
                    ...state,
                    allVideogames: filteredGenres
                }
            }
            return {
                ...state,
                allVideogames: "There are currently no games with that genre"
            }
        }
        case GET_GAMES_BY_NAME:
            if (action.payload !== "") {
                return {
                    ...state,
                    allVideogames: action.payload
                }
            }
            else {
                return {
                    ...state,
                    allVideogames: state.copyOfAllvideogames
                };
            }
        case POST_VIDEOGAME:
            return {
                ...state,
                allVideogames: [...action.payload, ...state.allVideogames]
            }
        default: return { ...state }
    }
}


export default Reducer;