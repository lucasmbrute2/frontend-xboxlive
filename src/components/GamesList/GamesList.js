import React from "react";
import GamesCard from "../GamesCard/GamesCard";
import { useState, useEffect } from "react";
import { Api } from "../../Api/Api";
import "./GamesList.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

export default function GamesList(){
    
    const [game,setGame]=useState([])
  
    const data = game.map((eachGame)=>{{
      const payload = {
        image: eachGame.cover,
        caption: eachGame.title
      }
      return payload
    }})

    console.log(data)
    
    useEffect(()=>{
        const loadGamesList = async ()=>{
            const response = await Api.getAll("game")
            const results = await response.json()
            setGame(results)

        }
        loadGamesList()
    },[])
    
    return (
      <div className='list-card'>     
        <Carousel 
          autoPlay={true}
          infiniteLoop={true}
          interval= {3000}
          onClickItem ={(click,item)=>console.log({ click, item })}
          thumbWidth = {120}
          width= '50%'
        > 
         {game.map((eachGame=>(
            <Link to={`/view/${eachGame.id}`}>
            <div className='list-card-container'>
              <img src={eachGame.cover} className='list-card-container-img' />
              <p></p>
            </div>
            </Link>  
        )))} 
          </Carousel>
        {/* <div className="list-card-container">                     
          {game.map((game,index)=>(
            <GamesCard key={`game_list_${index}`} game={game} className='list-card-container_card'/>
          ))}
        </div>            */}
    </div>
    );                   
}