import { useEffect, useState } from "react"
import { Api } from "../../../Api/Api"
import ProfileCard from "../../ProfileCard/ProfileCard"
import "./Profile.scss"
import { Link } from "react-router-dom"

export default function Profile(){

    const [profile,setProfile]= useState([])
    
    useEffect(()=>{
      const getProfile = async ()=>{
        const response = await Api.getAll('profile',true)
        const body = await response.json()

        setProfile(body)        
      } 
      getProfile()
    },[profile.id])
    
    return(
        <div className='profile-card-div'>
          {profile.map((eachProfile)=>(
            <ProfileCard 
            key={`profile_list_${profile.id}`}
            profile={eachProfile}
            />
          ))}

            <div className='add-profile'>
              <Link to=''>
                <i class="fas fa-plus-circle" id='icon-plus'></i>
              </Link>
              <p className='add-profile-p'>Adicionar perfil</p>
            </div>
            
        </div>

    )
}