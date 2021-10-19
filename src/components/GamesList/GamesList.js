import React from "react";
import GamesCard from "../GamesCard/GamesCard";
import { useState, useEffect } from "react";

export default function GamesList(){
    const [games,setGames]=useState([])
    
    useEffect(()=>{
        const loadGamesList = async ()=>{
            
        }
    },[])
    return(
        <div className='cards'>
            
            <GamesCard/>
        </div>
    )
}