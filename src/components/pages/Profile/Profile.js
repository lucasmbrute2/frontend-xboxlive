import ProfileList from "../../ProfileList/ProfileList"
import "./Profile.scss"
import { useState } from "react"
import CreateProfile from "../../CreateProfile/CreateProfile"
import PlusButton from "../../PlusButton/PlusButton"

export default function Profile(){

  const [edit,setEdit] = useState(true)
    console.log(edit)
  return(
      <div className='profile-card-div'>
        <div>
          {edit ? <ProfileList/> : <CreateProfile/>}
        </div>       
        <div className='profile-card-div-button'>
          <PlusButton className={edit? "fas fa-plus": "fas fa-arrow-left"}id={edit?'icon-plus':'icon-back-arrow'} onClick={()=>setEdit(!edit)} ></PlusButton>
          {edit?<p className='add-profile-p'>Adicionar perfil</p> :""}  
        </div>
          
      </div>
  )
}