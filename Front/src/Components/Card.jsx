import { Link } from 'react-router-dom';
import style from "../Estilos/Card.module.css"


const Card = ({id, name, image, genres,rating }) => {

    return (
        <div className={style.carta}>
            <Link to={`/detail/${id}`}>
                <h2>Name: {name}</h2>
            </Link>
            <h3>Genres: {genres.length? genres.join(", "): "unknown"} </h3>
            <h3>Rating: ⭐{rating}</h3>
            <img src={image} alt={name} width= "500px" height="450px" />
        </div>
    )
}

export default Card;