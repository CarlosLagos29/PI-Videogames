import { Link, NavLink } from 'react-router-dom';
import style from "../Estilos/Card.module.css"


const Card = ({ id, name, image, genres, rating }) => {

    return (
        <div className={style.carta}>
            <NavLink to={`/detail/${id}`} className={style.link}>
                <h3 className={style.nameContainer} >Name: {name}</h3>
                <h4 className={style.nameContainer}>Genres: {genres.length ? genres.join(", ") : "unknown"} </h4>
                <h4>Rating: {rating}</h4>
                <img src={image} alt={name} />
            </NavLink>
        </div>
    )
}

export default Card;