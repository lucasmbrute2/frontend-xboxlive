import { useEffect, useState } from "react"
import { Api } from "../../../Api/Api"
import ProfileCard from "../../ProfileCard/ProfileCard"
import "./Profile.scss"

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

      </div>
    
    
    )
}