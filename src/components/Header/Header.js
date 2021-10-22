import { Api } from "../../Api/Api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

export default function Header(){
    
    const [login,setLogin]= useState('') 
    const [user,setUser] = useState([])
    const userId = localStorage.getItem('userID')
    const jwt = localStorage.getItem('JWT')  
    
    useEffect(()=>{
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

        getUser()
        
    },[userId,jwt])
    

    const today = new Date()
    const date = new Intl.DateTimeFormat('pt-BR',{hour:"numeric",minute:"numeric"}).format(today)
    return(
        <header className='header'>
            <div className='header-profile'>
                {/* <img /> */}
                <div className='header-profile-logout'>
                    <p className='header-profile-logout-p'>{user.name}</p>    
                    <p className='header-profile-logout-container'>
                        {jwt? <Link to='/' className='header-profile-logout-container-link'>{login}</Link>:<Link to='/user/add' className='header-profile-logout-container-link'>{login}</Link>}
                    </p>
                </div>
            </div>
            <div>
                <Link to='/user/add'>Criar conta</Link>
            </div>
            <div className='header-menu'>
                <ul className='header-menu-list'>
                    <li className='header-menu-list-li'><i class="fas fa-search"></i></li>
                    <li className='header-menu-list-li'><i class="far fa-comment-dots"></i></li>
                    <Link to='/profile'><li className='header-menu-list-li'><i class="fas fa-cog" id='teste'></i></li></Link>
                    <li className='header-menu-list-li'>{date}</li>
                    <li className='header-menu-list-li'><img className='menu-img' src='https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-high-tech-rings-logo.png' alt='logo'/></li>
                </ul>
            </div>
        
        
        </header>
    )
}