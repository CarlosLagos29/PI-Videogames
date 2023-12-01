import { useEffect, useState } from "react";
import validate from "../FuncionesAux/validations";
import { useDispatch, useSelector } from "react-redux";
import { postVideogame } from "../Redux/Actions";

const NewGame = () => {

    const allgenres = useSelector((state) => state.allgenres);
    const dispatch = useDispatch();

    const [gameData, setGameData] = useState({
        name: "",
        description: "",
        plataforms: [],
        image: "https://ih1.redbubble.net/image.810044743.8981/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg", //si la cambias acordate de cambiarla en el validate 
        released: "",
        rating: 0,
        genres: []
    })

    const [errors, setErrors] = useState({});

    const [currentPlataform, setPlataforms] = useState("");

    const [genre1 , setGenre1] = useState([])
    const [genre2 , setGenre2] = useState([])
    const [genre3 , setGenre3] = useState([])


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

    const handlerGenres1 = (event)=>{
        event.target.value === "None"?
        setGenre1([]):
        setGenre1([event.target.value])
    }
    const handlerGenres2 = (event)=>{
        event.target.value === "None"?
        setGenre2([]):
        setGenre2([event.target.value])
    }
    const handlerGenres3 = (event)=>{
        event.target.value === "None"?
        setGenre3([]):
        setGenre3([event.target.value])
    }
    const handlerSetGenres = (event)=>{
        event.preventDefault();
        setGameData({
            ...gameData,
            genres: [...genre1,...genre2,...genre3]
        })
    }

    const handlerSubmitGame = (event)=>{
        event.preventDefault();
        dispatch(postVideogame(gameData))    
    }

    useEffect(() => {
        setErrors(validate(gameData))
    }, [gameData])

    return (
        <div>
            <img src={gameData.image} alt={gameData.name} width="500px" height="450px" />
            <form onSubmit={handlerSubmitGame}>
            
            <label>Image</label>
                <input type="text" value={gameData.image} name="image" onChange={handlerChange} />
                <p style={{ color: 'red' }}>{errors.image? errors.image : ""}</p>


                <label>Name</label>
                <input type="text" value={gameData.name} name="name" onChange={handlerChange} />
                <p style={{ color: 'red' }}>{errors.name? errors.name : ""}</p>


                <label>Genres</label>
                <select onChange={handlerGenres1}>
                    <option value="None">None</option>
                    {allgenres.length && allgenres.map(({ id, name }) => {
                        return (
                            <option key={id} value={name}>{name}</option>
                        )
                    })}
                </select> 
                <select onChange={handlerGenres2}>
                    <option value="None">None</option>
                    {allgenres.length && allgenres.map(({ id, name }) => {
                        return (
                            <option key={id} value={name}>{name}</option>
                        )
                    })}
                </select> 
                <select onChange={handlerGenres3}>
                    <option value="None">None</option>
                    {allgenres.length && allgenres.map(({ id, name }) => {
                        return (
                            <option key={id} value={name}>{name}</option>
                        )
                    })}
                </select>
                <button onClick={handlerSetGenres}>Set Genres</button>
                <p style={{ color: 'red' }}>{errors.genres? errors.genres : ""}</p>


                <label>Rating</label>
                <input type="number" min="0" max="5" value={gameData.rating} name="rating" onChange={handlerChange} />
                <p style={{ color: 'red' }}>{errors.rating? errors.rating : ""}</p>


                <label>Plataforms:</label>
                <ul>
                    {gameData.plataforms.map((platform, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                id={`platform${index}`}
                                onClick={handlerDeletePlataform}
                                value={platform}
                            />
                            <label htmlFor={`platform${index}`}>{platform}</label>
                        </li>
                    ))}
                </ul>
                <input type="text" value={currentPlataform} name="plataforms" onChange={handlePlatformChange} />
                <button onClick={handleAddPlatform}>Agregar Plataforma</button>
                <p style={{ color: 'red' }}>{errors.plataforms? errors.plataforms : ""}</p>


                <label>Relased Date</label>
                <input type="date" value={gameData.released} name="released" onChange={handlerChange} />
                <p style={{ color: 'red' }}>{errors.date? errors.date : ""}</p>


                <label id="Description">Description</label>
                <textarea name="description" id="Description" cols="30" rows="10" value={gameData.description} onChange={handlerChange}></textarea>
                <p style={{ color: 'red' }}>{errors.description? errors.description : ""}</p>


                <button type="submit" disabled ={Object.keys(errors).length === 0? false : true}>Create Game</button>
            </form>
        </div>
    )
}

export default NewGame;