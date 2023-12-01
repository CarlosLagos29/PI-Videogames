import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesByName } from "../Redux/Actions";
import styles from "../Estilos/SearchBar.module.css"


const SearchBar = ()=> {

const [search,setSearch] = useState(""); 
const dispatch = useDispatch();

const handlerSearch = (event)=>{
    setSearch(event.target.value);
    dispatch(getGamesByName(search))
}

const handlerClick = ()=>{
    dispatch(getGamesByName(search))
}    

    return(
        <div className={styles}>
            <input className={styles.barra} type="search" value={search} onChange={handlerSearch} />
            <button className={styles.agregar}  onClick={handlerClick}>🔍</button>
        </div>
    )
}

export default SearchBar;