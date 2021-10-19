import React from "react";
import GamesCard from "../GamesCard/GamesCard";
import { useState, useEffect } from "react";
import { Api } from "../../Api/Api";
import "./GamesList.scss"

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
            setUser(results) //pegar o objeto User parar usar a foto de perfil na Home
        }
        loadGamesList()
        LoadUser()
    },[])
    if(!game){
        return "Carregando..."
    }
    return (
        <div className='list-card'>
            <section className="list-card-container">
                {game.map((game,index)=>(
                    <GamesCard key={`game_list_${index}`} game={game} className='list-card-container_card'/>
                ))}
            </section>
        </div>
    );
}