import React from "react";
import { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import "./GameView.scss"
import { Link } from "react-router-dom"

const GameView = (props)=> {
    let { id } = props.match.params
    const [gameId,setGameId] = useState({}) 
    useEffect(()=>{
        const LoadGameUnique = async ()=> {
            const response = await Api.getById('game',id,true)
            const result = await response.json()
            setGameId(result)
        }
        LoadGameUnique()       
    },[id])
    const today = new Date()
    const date = new Intl.DateTimeFormat('pt-BR',{hour:"numeric",minute:"numeric"}).format(today)
    return(
        <div className='view'>
            <div className='view-header'>
                <Link to='/'><img id ='logo-view'src='https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-high-tech-rings-logo.png' alt='logo'/> </Link>
                <p className='view-p'>{date}</p>
            </div>
            
            <div className='view-game'>
                <div className='view-game-container-img'>
                    <img src={gameId.cover} alt={gameId.name} className='view-game-container-img-img'/>
                </div>
                <div className='view-game-container-text'>
                    <p className='view-game-year'>{gameId.year}</p>
                    <p className='view-game-title'>{gameId.title}</p>
                    <p className='view-game-description'>{gameId.description}</p>
                </div>
            
                <div className='view-game-container-imdb'>
                    <p className='view-game-container-imdb-p' >{gameId.imdb}</p>
                    <i className="fas fa-star"></i>

                </div>
            </div>
                

        </div>
    )
}

export default GameView;

    