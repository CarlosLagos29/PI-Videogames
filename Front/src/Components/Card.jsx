import { Link } from 'react-router-dom';


const Card = ({id, name, image, genres }) => {

    return (
        <div>
            <Link to={`/detail/${id}`}>
                <h2>Name: {name}</h2>
            </Link>
            <h3>Genres: {genres} </h3>
            <img src={image} alt={name} width= "500px" height="450px" />
        </div>
    )
}

export default Card;