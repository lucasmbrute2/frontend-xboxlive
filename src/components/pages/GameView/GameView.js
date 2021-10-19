import React from "react";
import { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";

const GameView = (props)=> {
    let { id } = props.match.params
    const [gameId,setGameId] = useState({}) 
    const getArray = ()=>{}
    useEffect(()=>{
        const LoadGameUnique = async ()=> {
            const response = await Api.getById('game',id)
            const result = await response.json()
            setGameId(result)
        }
        LoadGameUnique()       
    },[id])
    return(
        <div>
            <p></p>
            <img src={gameId.cover} alt={gameId.name}/>
        </div>
    )
}

export default GameView;

    