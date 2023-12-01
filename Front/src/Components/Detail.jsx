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
         <img src={actualGame.image ? actualGame.image : "NotFound"} alt={actualGame.name} width="500px" height="450px" />
         <h2>ID || {id ? id : "NotFound"}</h2>
         <h2>Name || {actualGame.name ? actualGame.name : "NotFound"}</h2>
         <h2>Plataforms || 🎮{actualGame.plataforms ? actualGame.plataforms?.join(", ") : "NotFound"}</h2>
         <h2>Relased Date || {actualGame.released ? actualGame.released : "NotFound"}</h2>
         <h2>Rating || ⭐{actualGame.rating ? actualGame.rating : "NotFound"}</h2>
         <h2>Generos || {actualGame.Genres ? actualGame.Genres?.join(", ") : "NotFound"}</h2>
         <div className={style.datos}>
            <h2>Description ||</h2>
            <p>{actualGame.description ? actualGame.description : "NotFound"}</p>
         </div>
      </div>
   )
}

export default Detail;