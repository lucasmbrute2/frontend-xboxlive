import React from "react";
import { Link } from "react-router-dom";

export default function GamesCard({ game , props }){
    
    return(
        <Link to={`/view/${game.id}`}>
            <div>
                {game.title}
            </div>
        </Link>
    )
}