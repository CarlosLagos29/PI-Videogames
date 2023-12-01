import { filterGender, filterOrigin, orderAlph, orderRating, page } from "../Redux/Actions";
import { useDispatch,useSelector } from 'react-redux';
import styles from "../Estilos/Filters.module.css"

const Filters = ()=>{

    const dispatch = useDispatch();
    const allgenres = useSelector((state)=> state.allgenres)

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
        <div className={styles.allFilters}>
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
                {allgenres.length && allgenres.map(({id,name})=> {
                    return(
                        <option key={id} value={name}>{name}</option>
                    )
                })}
            </select>
            </div>
    )
}

export default Filters;