import React from "react";
import GamesCard from "../GamesCard/GamesCard";
import { useState, useEffect } from "react";
import { Api } from "../../Api/Api";

export default function GamesList(){
    const [game,setGame]=useState([])
    const [user,setUser]= useState([])
    useEffect(()=>{
        const loadGamesList = async ()=>{
            const response = await Api.getAll("game")
            const results = await response.json()
            setGame(results)

        }
        const LoadUser = async ()=>{
            const response  = await Api.getAll("user")
            const results = await response.json()
            console.log(results)
            setUser(results) //pegar o objeto User parar usar a foto de perfil na Home
        }
        loadGamesList()
        LoadUser()
    },[])
    if(!game){
        return "Carregando..."
    }
    return (
        <div className='list-cards'>
            <header className='list-cards-header'>
                {user.map(()=>(
                    <p>{user[0].profile[0].image}</p>
                ))}
            </header>
            <div className="list-card_cards">
                {game.map((game,index)=>(
                    <GamesCard key={`game_list_${index}`} game={game}/>
                ))}
            </div>
        </div>
    );
}