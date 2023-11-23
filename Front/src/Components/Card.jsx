import { Link } from 'react-router-dom';


const Card = ()=>{
    return(
        <div>
            <h1>Soy la carta</h1>
            <Link to= "/detail">
                <button>detalle</button>
            </Link>
        </div>
    )
}

export default Card;