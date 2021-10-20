import React from "react";
import GamesCard from "../GamesCard/GamesCard";
import { useState, useEffect } from "react";
import { Api } from "../../Api/Api";
import "./GamesList.scss"

export default function GamesList(){
    const [game,setGame]=useState([])
    useEffect(()=>{
        const loadGamesList = async ()=>{
            const response = await Api.getAll("game")
            const results = await response.json()
            setGame(results)

        }
        loadGamesList()
    },[])
    if(!game){
        return "Carregando..."
    }
    return (
        <div className='list-card'>     
                    <div className="list-card-container">
                        {game.map((game,index)=>(
                            <GamesCard key={`game_list_${index}`} game={game} className='list-card-container_card'/>
                        ))}
                    </div>
        </div>
    );
}