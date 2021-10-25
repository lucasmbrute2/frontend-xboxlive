import React from "react";
import GamesCard from "../GamesCard/GamesCard";
import { useState, useEffect } from "react";
import { Api } from "../../Api/Api";
import "./GamesList.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function GamesList(){
    
    const [game,setGame]=useState([])
    
    const responsive = {  
        superLargeDesktop: {

        breakpoint: { max: 4000, min: 3000 },
        items: 7
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }; 
    
    
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
                    
                    <Carousel 
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                    <div className="list-card-container">
                        {game.map((game,index)=>(
                            <GamesCard key={`game_list_${index}`} game={game} className='list-card-container_card'/>
                        ))}
                    </div>
                    </Carousel>
        </div>
    );                   
}