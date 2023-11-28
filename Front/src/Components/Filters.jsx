import { filterGender, filterOrigin, orderAlph, orderRating, page } from "../Redux/Actions";
import { useDispatch } from 'react-redux';

const Filters = ()=>{

    const dispatch = useDispatch()

    const handlerAlph = (event) => {
        dispatch(page(1))
        dispatch(orderAlph(event.target.value));
    }
    const handlerRating = (event)=>{
        dispatch(page(1))
        dispatch(orderRating(event.target.value))
    }
    const handlerOrigin = (event) =>{
        dispatch(page(1))
        dispatch(filterOrigin(event.target.value))
    }
    const handlerGenres = (event) => {
        dispatch(page(1))
        dispatch(filterGender(event.target.value))
    }
    return (
        <div>
            <select onChange={handlerAlph}>
                <option value="Default">Name Order</option>
                <option value="A">A-z</option>
                <option value="Z">Z-a</option>
            </select>
            <select onChange={handlerRating}>
                <option value="Unratig">Rating Order</option>
                <option value="Highiest">Highiest</option>
                <option value="Lowest">Lowest</option>
            </select>
            <select onChange={handlerOrigin}>
                <option value="All">All Games</option>
                <option value="API">Api Games</option>
                <option value="DB">My Games</option>
            </select>
            <select onChange={handlerGenres}>
                <option value="All genres">All Genres</option>
                <option value="Action">Action</option>
                <option value="Indie">Indie</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Strategy">Strategy</option>
                <option value="Shooter">Shooter</option>
                <option value="Casual">Casual</option>
                <option value="Simulation">Simulation</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Arcade">Arcade</option>
                <option value="Platformer">Platformer</option>
                <option value="Massively Multiplayer">Massively Multiplayer</option>
                <option value="Racing">Racing</option>
                <option value="Sports">Sports</option>
                <option value="Fighting">Fighting</option>
                <option value="Family">Family</option>
                <option value="Board Games">Board Games</option>
                <option value="Educational">Educational</option>
                <option value="Card">Card</option>
            </select>
            </div>
    )
}

export default Filters;