import { useEffect, useState } from "react";
import validate from "../FuncionesAux/validations";
import { useDispatch, useSelector } from "react-redux";
import { postVideogame } from "../Redux/Actions";
import style from "../Estilos/NewGame.module.css";

const NewGame = () => {

    const allgenres = useSelector((state) => state.allgenres);
    const dispatch = useDispatch();

    const [gameData, setGameData] = useState({
        name: "",
        description: "",
        plataforms: [],
        image: "../Utils/Sin título-2.png", //si la cambias acordate de cambiarla en el validate 
        released: "",
        rating: 0,
        genres: []
    })

    const [errors, setErrors] = useState({});

    const [currentPlataform, setPlataforms] = useState("");

    const [genre1, setGenre1] = useState([])
    const [genre2, setGenre2] = useState([])
    const [genre3, setGenre3] = useState([])

    const [createdGame,setCreatedGame] = useState(false)


    const handlerChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setGameData({
            ...gameData,
            [name]: value
        })
    }

    const handlePlatformChange = (event) => {
        setPlataforms(event.target.value)
    };
    const handleAddPlatform = (event) => {
        event.preventDefault();
        if (currentPlataform.trim() !== "") {
            setGameData({
                ...gameData,
                plataforms: [...gameData.plataforms, currentPlataform]
            })
        }
    };
    const handlerDeletePlataform = (event) => {
        event.preventDefault();
        const deletedPlataform = gameData.plataforms.filter((p) => p !== event.target.value)
        setGameData({
            ...gameData,
            plataforms: deletedPlataform
        })
    };

    const handlerGenres1 = (event) => {
        event.target.value === "None" ?
            setGenre1([]) :
            setGenre1([event.target.value])
    }
    const handlerGenres2 = (event) => {
        event.target.value === "None" ?
            setGenre2([]) :
            setGenre2([event.target.value])
    }
    const handlerGenres3 = (event) => {
        event.target.value === "None" ?
            setGenre3([]) :
            setGenre3([event.target.value])
    }
    const handlerSetGenres = (event) => {
        event.preventDefault();
        setGameData({
            ...gameData,
            genres: [...genre1, ...genre2, ...genre3]
        })
    }

    const handlerSubmitGame = (event) => {
        event.preventDefault();
        dispatch(postVideogame(gameData))
        setCreatedGame(true)

    }

    useEffect(() => {
        setErrors(validate(gameData))
    }, [gameData])

    return (
        <div className={style.divForm}>
            <img src={gameData.image} alt={gameData.name}className={style.imagForm} />
            <form className={style.form} onSubmit={handlerSubmitGame}>

                <label>Image:</label>
                <input className={style.inputImage} type="text" value={gameData.image} name="image" onChange={handlerChange} />
                <p style={{ color: 'red' }}>{errors.image ? errors.image : ""}</p>


                <label>Name:</label>
                <input className={style.inputName} type="text" value={gameData.name} name="name" onChange={handlerChange} />
                <p style={{ color: 'red' }}>{errors.name ? errors.name : ""}</p>


                <label>Genres:</label>
                <select onChange={handlerGenres1} className={style.genres}>
                    <option value="None">None</option>
                    {allgenres.length && allgenres.map(({ id, name }) => {
                        return (
                            <option key={id} value={name}>{name}</option>
                        )
                    })}
                </select>
                <select onChange={handlerGenres2} className={style.genres}>
                    <option value="None">None</option>
                    {allgenres.length && allgenres.map(({ id, name }) => {
                        return (
                            <option key={id} value={name}>{name}</option>
                        )
                    })}
                </select>
                <select onChange={handlerGenres3} className={style.genres}>
                    <option value="None">None</option>
                    {allgenres.length && allgenres.map(({ id, name }) => {
                        return (
                            <option key={id} value={name}>{name}</option>
                        )
                    })}
                </select>
                <button className={style.buttonForm}  onClick={handlerSetGenres}>Set Genres</button>
                <p style={{ color: 'red' }}>{errors.genres ? errors.genres : ""}</p>


                <label>Rating:</label>
                <input className={style.inputName} type="number" min="0" max="5" value={gameData.rating} name="rating" onChange={handlerChange} />
                <p style={{ color: 'red' }}>{errors.rating ? errors.rating : ""}</p>


                <label>Plataforms:</label>
                <ul className={style.checkboxContainer}>
                    {gameData.plataforms.map((platform, index) => (
                        <li key={index}>
                            <button onClick={handlerDeletePlataform} value={platform}>{platform}</button>
                        </li>
                    ))}
                </ul>
                <input className={style.inputName} type="text" value={currentPlataform} name="plataforms" onChange={handlePlatformChange} />
                <button className={style.buttonForm}  onClick={handleAddPlatform}>Agregar Plataforma</button>
                <p style={{ color: 'red' }}>{errors.plataforms ? errors.plataforms : ""}</p>


                <label>Relased Date:</label>
                <input className={style.inputName} type="date" value={gameData.released} name="released" onChange={handlerChange} />
                <p style={{ color: 'red' }}>{errors.released ? errors.released : ""}</p>


                <label id="Description">Description:</label>
                <textarea className={style.description} name="description" id="Description" cols="90" rows="10" value={gameData.description} onChange={handlerChange}></textarea>
                <p style={{ color: 'red' }}>{errors.description ? errors.description : ""}</p>


                <button type="submit" disabled={Object.keys(errors).length === 0 ? false : true}>Create Game</button>
                <p style={{color: "green"}}>{createdGame === true? "Game Created successfully!": "" }</p>
            </form>
        </div>
    )
}

export default NewGame;