import Card from "./Card";
import Pages from "./Pages";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames ,getGenres } from "../Redux/Actions";
import Styles from "../Estilos/HomePage.module.css"


const HomePage = () => {

    const allVideogames = useSelector((state) => state.allVideogames);
    const allgenres = useSelector((state)=> state.allgenres)
    const gamesPerPage = useSelector((state) => state.gamesPerPage);
    const currentPage = useSelector((state) => state.currentPage);

    const dispatch = useDispatch()

    const lastIndex = gamesPerPage * currentPage;
    const firstIndex = lastIndex - gamesPerPage;

    useEffect(() => {
        dispatch(getAllVideogames())
        dispatch(getGenres())
    }, [dispatch])

    return (
        <div>
            <Filters/>
            <div className={Styles.allCards}>
            {
                !allVideogames.length ? <img src="..\Utils\gifpacman.gif" alt="" /> :
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
                    : <h1 style={{color: "white"}}>{allVideogames}</h1>
            }
            </div>
            { allVideogames.length && <Pages allVideogames={allVideogames} />}
        </div>
    )
}

export default HomePage;