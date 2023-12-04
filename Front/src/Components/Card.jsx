import { Link } from 'react-router-dom';
import style from "../Estilos/Card.module.css"


const Card = ({id, name, image, genres,rating }) => {

    return (
        <div className={style.carta}>
            <Link to={`/detail/${id}`}>
                <h3 className= {style.nameContainer} >Name: {name}</h3>
            </Link>
            <h4 className= {style.nameContainer}>Genres: {genres.length? genres.join(", "): "unknown"} </h4>
            <h4>Rating: {rating}</h4>
            <img src={image} alt={name} width= "450px" height="400px" />
        </div>
    )
}

export default Card;