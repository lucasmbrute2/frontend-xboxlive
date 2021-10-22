import "./ProfileCard.scss"
import { Link } from "react-router-dom"
export default function ProfileCard({ profile }){
    const profileId = profile.id //alocando o id do Profile em uma variável
    
    const handleJwt= ()=>{
        localStorage.setItem('profileId',profileId) //enviando o Id do profile para LocalStorage
    }
    return(
        <div className='profile' onClick={handleJwt}>
            <div className='profile-container'>
                <p className='profile-container-p'>{profile.title}</p>
                <Link to='/'>
                    <div className='container-2'>
                        <img className='profile-container-img' src={profile.image} alt={profile.title}/>         
                    </div>        
                </Link>
          </div>
        </div>

    )
}