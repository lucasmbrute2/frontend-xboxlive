import { useEffect, useState } from "react"
import { Api } from "../../../Api/Api"
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
    
    const HandleJwt = (e)=>{
      console.log(e)
    }
    
    return(
      <div className='profile'>
        {profile.map((eachProfile)=>(
          <div onClick={()=>HandleJwt(key)} className='profile-container' key={`profile_list_${eachProfile.id}`}>
            <p className='profile-container-p'>{eachProfile.title}</p>
            
            <div className='container-2'>
              <img className='profile-container-img' src={eachProfile.image} alt={eachProfile.title}/>         
            </div>        
          </div>
        ))}

      </div>
    
    
    )
}