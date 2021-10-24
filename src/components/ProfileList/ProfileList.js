import { useEffect, useState } from "react"
import "./ProfileList.scss"
import ProfileCard from "../ProfileCard/ProfileCard"
import { Api } from "../../Api/Api"

export default function ProfileList(){
    
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
        <div className='profile-list'>
        {profile.map((eachProfile)=>(
            <ProfileCard
            key={`profile_list_${profile.id}`}
            profile={eachProfile}
            />
          ))}
        </div>
    )
}