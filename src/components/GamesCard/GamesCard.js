import React from "react";
import { Link } from "react-router-dom";
import "./GamesCard.scss"


export default function GamesCard({ game }){
    return(
        <div>
            
            <Link to={`/view/${game.id}`}>           
                    <div className='div-card'>
                            <img src={game.cover} class='div-card-img' alt={game.title}/>
                   </div>
            </Link>
                
            </div>
    )
}