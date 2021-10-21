import { Api } from "../../Api/Api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

export default function Header(){
    
    const [user,setUser] = useState([])
    
    const userId = localStorage.getItem('userID')
    
    useEffect(()=>{
        const getUser= async ()=>{
            const response = await Api.getById('user',userId,true)
            const results = await response.json()
            setUser(results)
        }
        getUser()
    },[userId])

    const today = new Date()
    const date = new Intl.DateTimeFormat('pt-BR',{hour:"numeric",minute:"numeric"}).format(today)
    return(
        <header className='header'>
            <div className='header-profile'>
                {/* <img /> */}
                <div className='header-profile-logout'>
                    <p>{user.name}</p>    
                    <span>
                        <Link>Logout</Link>
                    </span>
                </div>
            </div>
            <div>
                <Link to='/user/add'>Criar conta</Link>
            </div>
            <div className='header-menu'>
                <ul className='header-menu-list'>
                    <li className='header-menu-list-li'><i class="fas fa-search"></i></li>
                    <li className='header-menu-list-li'><i class="far fa-comment-dots"></i></li>
                    <li className='header-menu-list-li'><i class="fas fa-cog"></i></li>
                    <li className='header-menu-list-li'>{date}</li>
                    <li className='header-menu-list-li'><img className='menu-img' src='https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-high-tech-rings-logo.png' alt='logo'/></li>
                </ul>
            </div>
        
        
        </header>
    )
}