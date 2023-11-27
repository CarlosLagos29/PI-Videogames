import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = ()=>{
    return (
        <nav>
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
