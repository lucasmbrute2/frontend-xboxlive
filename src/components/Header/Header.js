import { Api } from "../../Api/Api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Header.scss"
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import React from "react"

export default function Header(){
    
    //Mui states
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    //States
    const [login,setLogin]= useState('') 
    
    const [user,setUser] = useState([])
   
    const [profile,setProfile] = useState([])
    //Variáveis
    const userId = localStorage.getItem('userID')
    
    const profileId = localStorage.getItem('profileId')

    const jwt = localStorage.getItem('JWT')  

    useEffect(()=>{
        //Função recebendo os dados do User do banco
        const getUser= async ()=>{
            const response = await Api.getById('user',userId,true)
            const results = await response.json()
            setUser(results)
            if(jwt){
                setLogin("Logout")
                console.log('entrou true')
            }else{
                setLogin("Entrar")
            }
        }
        
        const getProfile = async ()=>{
            const response = await Api.getById('profile',profileId,true)
            const body = await response.json()
            setProfile(body)
        }
        
        getUser()
        getProfile() 
    },[userId,jwt,profileId])
    
    // Mui function
    const handleClick = (event) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const today = new Date()
    const date = new Intl.DateTimeFormat('pt-BR',{hour:"numeric",minute:"numeric"}).format(today)
    
    return(
        <header className='header'>
            <div className='header-profile'>
                <Link to='/profile'>
                    <img src={profile.image} alt={profile.title}/>
                </Link>
                <div className='header-profile-name'>
                    <p className='header-profile-name-p'>{profile.title} </p>    
                </div>
                <div className='header-profile-desc'>
                    <i class="fas fa-sign-in-alt" id='logo-sign-out'></i>
                    <p className='header-profile-desc-p'>
                        {jwt? <Link to='/' className='header-profile-desc-p-link'>{login}</Link>:<Link to='/user/add' className='header-profile-desc-p-link'>{login}</Link>}
                    </p>
                </div>
            </div>
            <div>
            </div>
            <div className='header-menu'>
                <ul className='header-menu-list'>
                    <li className='header-menu-list-li'><i class="fas fa-search"></i></li>
                    
                    <li className='header-menu-list-li'><i class="far fa-comment-dots"></i></li>
                    
                        <li className='header-menu-list-li'>
                            <Button 
                            id="fade-button"
                            aria-controls="fade-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            >
                                <i class="fas fa-cog" id='teste'></i>
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                "aria-labelledby": "fade-button"
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >                       
                                <Link to='/profile'>
                                    <MenuItem onClick={handleClose} style={{textDecorationLine: 'none'}}>Perfil</MenuItem>
                                </Link>
                                <MenuItem onClick={handleClose}>Configurações</MenuItem>
                                
                            </Menu>                                                                                                        
                        </li>                                                   
                    <li className='header-menu-list-li'>{date}</li>
                    
                    <li className='header-menu-list-li'><img className='menu-img' src='https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-high-tech-rings-logo.png' alt='logo'/></li>
                </ul>
            </div>
        
        
        </header>
    )
}