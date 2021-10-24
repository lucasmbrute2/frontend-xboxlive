import "./CreateProfile.scss"

export default function CreateProfile(){
    return(
        <div id='add'>
           <div id='add-h1'>
               <h1 id='add-h1-h1'>
                    Cadastre um perfil
               </h1>
           </div>
        
            <div id='div-form'>
                <form id='div-form-form'>
                    <div className='div-form-form-container'>
                        <input className='input-profile' placeholder='Nome' name='title'>
                        </input>
                    </div>
                    
                    <div className='div-form-form-container'> 
                        <input className='input-profile' placeholder='Imagem' name='image'>
                        </input>
                    </div>
                
                    <div className='div-form-form-container'>
                        <input type='submit' value='Cadastrar' className='input-profile input-profile-submit'>
                        </input>
                    </div>                             
                </form>
            </div>
        </div>
    )

}