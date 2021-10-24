import { Link } from "react-router-dom"
import "./CreateProfile.scss"

export default function CreateProfile(){
    
    const HandleSubmit = (e)=>{
        e.preventDefault()
        console.log('hello')
    }
    return(
        <div id='add'>
           <div id='add-h1'>
               <h1 id='add-h1-h1'>
                    Cadastre um perfil
               </h1>
           </div>
        
            <div id='div-form'>
                <form id='div-form-form' onSubmit={HandleSubmit}>
                    <div className='div-form-form-container'>
                        <input className='input-profile' placeholder='Nome' name='title' required>
                        </input>
                    </div>
                    
                    <div className='div-form-form-container'> 
                        <input className='input-profile' placeholder='Imagem' name='image' required>
                        </input>
                    </div>
                
                    <div className='div-form-form-container div-form-form-container-flex'>
                    
                    
                           <Link to='/'>
                                <button className='input-profile input-profile-submit input-profile input-profile-submit-danger' >
                                Voltar
                                </button>   
                            </Link>
                            <input type='submit' value='Cadastrar' className='input-profile input-profile-submit'>
                            </input>
                        </div>
                        
                                            
                
                </form>
            </div>
        </div>
    )

}