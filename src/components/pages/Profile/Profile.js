import ProfileList from "../../ProfileList/ProfileList"
import "./Profile.scss"
import { useState } from "react"
import CreateProfile from "../../CreateProfile/CreateProfile"

export default function Profile(){

  const [edit,setEdit] = useState(true)
  
  return(
      <div className='profile-card-div'>
        <div>
          {edit ? <ProfileList/> : <CreateProfile/>}
        </div>
        
        {edit ?
          <div className='profile-card-div-button'>
            <i className= "fas fa-plus-circle" onClick={()=>setEdit(!edit)} id='icon-plus'></i>
            <p className='add-profile-p'>Adicionar perfil</p>
          </div>
        : ''
        }

      </div>

  )
}