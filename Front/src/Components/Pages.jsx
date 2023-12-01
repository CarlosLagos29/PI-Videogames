import { useDispatch, useSelector } from 'react-redux';
import style from "../Estilos/Pages.module.css"
import { page } from '../Redux/Actions';

const Pages = ({allVideogames})=>{
    
    const pag = [];
    const gamesPerPage = useSelector((state)=> state.gamesPerPage);
    const currentPage = useSelector((state)=>state.currentPage);

    const dispatch = useDispatch()

    for(let i = 1; i <= Math.ceil(allVideogames.length / gamesPerPage); i++){
        pag.push(i)
    }

    const pagesHandler = (event) => {
        dispatch(page(event.target.value))
    }
 return(
    <nav className={style.pages}>
            <button value="Previus" onClick={pagesHandler} disabled={currentPage == 1? true: false}>{"<"}</button>
            {pag.map((nPage)=>(
                <button value={nPage} onClick={pagesHandler} className={nPage == currentPage? style.current : ""} key={nPage}>{nPage}</button>
            ))}
            <button value="Next" onClick={pagesHandler} disabled={currentPage == pag.length  ? true: false}>{">"}</button>
    </nav>
 )
}

export default Pages;