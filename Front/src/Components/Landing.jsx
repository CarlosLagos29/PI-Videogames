import { Link } from 'react-router-dom';
import style from "../Estilos/Landing.module.css"

const Landing = () => {
    return (
        <div className={style.landing}>
            <h1 className={style.tittle}>Pi-Videogames</h1>
            <img src="..\Utils\cc53145fafdc360dd9a7ad9fecc852ff.gif" alt="" />
            <br />
            <Link to="/home">
                <a>
                    <img src="..\Utils\images (1).png" alt="" className={style.pressStart} />
                </a>
            </Link>
        </div>
    )
}


export default Landing;