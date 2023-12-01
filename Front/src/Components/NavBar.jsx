import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import style from "../Estilos/NavBar.module.css"

const NavBar = ()=>{
    return (
        <nav className={style.Alineado}>
            <SearchBar/>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <Link to="/create">
                <button>New game</button>
            </Link>
            <Link to= "/">
                <button>Quit</button>
            </Link>
        </nav>
    )
}

export default NavBar;
