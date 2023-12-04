import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllVideogames, getGamesByName, page } from "../Redux/Actions";
import styles from "../Estilos/SearchBar.module.css"


const SearchBar = ()=> {

const [search,setSearch] = useState(""); 
const dispatch = useDispatch();

const handlerSearch = (event)=>{
    dispatch(page(1))
    setSearch(event.target.value);
    dispatch(getGamesByName(search))
}

const handlerClick = ()=>{
    if(search === ""){
       location.reload()
    }
    else{
    dispatch(getGamesByName(search))
    }
}    

    return(
        <div className={styles}>
            <input className={styles.barra} type="search" value={search} onChange={handlerSearch} />
            <button className={styles.agregar}  onClick={handlerClick}>Search</button>
        </div>
    )
}

export default SearchBar;