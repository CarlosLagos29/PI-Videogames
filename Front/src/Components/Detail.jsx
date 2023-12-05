import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../Estilos/Detail.module.css"

const Detail = () => {

   const { id } = useParams();

   const [actualGame, setActualGame] = useState({})

   useEffect(() => {
      axios(`http://localhost:3001/videogames/games/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setActualGame(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }
      );
      return setActualGame({});
   }, [id]);

   return (
      <div className={style.detalle}>
         <div className={style.nonDescription}>
         <div className={style.imgID}>
         <img className={style.image} src={actualGame.image ? actualGame.image : "NotFound"} alt={actualGame.name}/>
         <h3>ID: {id ? id : "NotFound"}</h3>
         </div>
         <div className={style.nprrg}>
         <h3>Name: {actualGame.name ? actualGame.name : "NotFound"}</h3>
         <h3>🎮Plataforms: {actualGame.plataforms ? actualGame.plataforms?.join(", ") : "NotFound"}</h3>
         <h3>Relased Date: {actualGame.released ? actualGame.released : "NotFound"}</h3>
         <h3>⭐Rating: {actualGame.rating ? actualGame.rating : "NotFound"}</h3>
         <h3>Generos: {actualGame.Genres ? actualGame.Genres?.join(", ") : "NotFound"}</h3>
         </div>
         </div>
         <div className={style.description}>
         <h3>Description:</h3>
         <p >{actualGame.description ? actualGame.description : "NotFound"}</p>
         </div>
      </div>
   )
}

export default Detail;