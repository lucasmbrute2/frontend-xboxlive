import React from "react";
import GamesCard from "../GamesCard/GamesCard";
import { useState, useEffect } from "react";
import { Api } from "../../Api/Api";

export default function GamesList(){
    const [game,setGame]=useState([])
    useEffect(()=>{
        const loadGamesList = async ()=>{
            const response = await Api.getAll()
            const results = await response.json()
            console.log(results)
            setGame(results)
        }
        loadGamesList()
        
    },[])
    if(!game){
        return "Carregando..."
    }
    return (
        <div className="cards">
            {game.map((game,index)=>(
                <GamesCard key={`game_list_${index}`} game={game}/>
            ))}
        </div>
    );
}