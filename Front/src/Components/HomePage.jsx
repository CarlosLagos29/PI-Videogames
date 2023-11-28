import Card from "./Card";
import Pages from "./Pages";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames} from "../Redux/Actions";


const HomePage = () => {

    const allVideogames = useSelector((state) => state.allVideogames)
    const gamesPerPage = useSelector((state) => state.gamesPerPage);
    const currentPage = useSelector((state) => state.currentPage);

    const dispatch = useDispatch()

    const lastIndex = gamesPerPage * currentPage;
    const firstIndex = lastIndex - gamesPerPage;

    useEffect(() => {
        dispatch(getAllVideogames())
    }, [])

    return (
        <div>
            <Filters/>
            <br />
            {
                !allVideogames.length ? <img src="..\Utils\loading-2.gif" alt="" /> :
                Array.isArray(allVideogames)?
                    allVideogames.map(({ id, name, image, Genres , rating }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                image={image}
                                genres={Genres}
                                rating={rating}
                            />
                        )
                    })
                    .slice(firstIndex, lastIndex)
                    : <h1>{allVideogames}</h1>
            }
            <Pages allVideogames={allVideogames} />
        </div>
    )
}

export default HomePage;