import Card from "./Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from "../Redux/Actions";
import Pages from "./Pages";

const HomePage = ()=>{

    const allVideogames = useSelector((state) => state.allVideogames)
    const gamesPerPage = useSelector((state)=> state.gamesPerPage);
    const currentPage = useSelector((state)=>state.currentPage);

    const dispatch = useDispatch()

    const lastIndex = gamesPerPage * currentPage;
    const firstIndex = lastIndex - gamesPerPage;

    useEffect(()=>{
        dispatch(getAllVideogames())
    },[])

    console.log(allVideogames);
    return(
        <div>
            {
                !allVideogames.length? <img src="..\Utils\loading-2.gif" alt="" />:
                allVideogames.map(({id,name,image,Genres})=>{
                    return(
                        <Card
                        key={id}
                        id = {id}
                        name = {name}
                        image= {image}
                        genres={Genres}
                        />
                    )
                })
                .slice(firstIndex,lastIndex)
            }
            <Pages allVideogames = {allVideogames}/>
        </div>
    )
}

export default HomePage;