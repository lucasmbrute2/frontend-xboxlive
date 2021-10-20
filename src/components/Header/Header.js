import { Api } from "../../Api/Api"
import { useState, useEffect } from "react"
export default function Header(){
    
    const [user,setUser] = useState([])
    
    useEffect(()=>{
        const getUser= async ()=>{
            const response = await Api.getAll('user')
            const results = await response.json()
            setUser(results)
        }
        getUser()
    },[])
    console.log(user)
    return(
        <header className='header'>
            <div className='header-profile'>
                <div className='header-profile-logout'>
                    <img />
                </div>
            </div>

            <div className='header-menu'>
                <ul className='header-menu-list'>
                    <li>Lupa</li>
                    <li>Mensagens</li>
                    <li>Engrenagem</li>
                    <li>Horas</li>
                    <li>Logo</li>
                </ul>
            </div>
        
        
        </header>
    )
}