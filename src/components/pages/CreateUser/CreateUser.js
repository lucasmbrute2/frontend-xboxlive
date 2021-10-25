import React from "react";
import { Link } from "react-router-dom"
import { Api } from "../../../Api/Api";
import "./CreateUser.scss"

export default function CreateUser(props){
    

    const HandleSubmit = async (e)=>{
        e.preventDefault()
    
        const name = e.target.name.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value
        const password = e.target.password.value
        const cpf = e.target.cpf.value
        const admin = false
        
        const payload = {
            name,
            lastName,
            email,
            password,
            cpf,
            admin
        }
        const response = await Api.post('user',payload)

        
        if(response.status===201){
            const payloadLogin = {
                email: payload.email,
                password: payload.password
            }
            const response =  await Api.post('login',payloadLogin)
            const body = await response.json()
            
            localStorage.setItem('JWT',body.accessToken)
            props.history.push("/")   
            
        }else{
            throw new Error('error')
        }
    }
    
    
    
    return( 
        <div className='add'>
                    <Link to='/'>Home</Link>
                    <div className='add-title-container'>
                        <img src='https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-high-tech-rings-logo.png' alt='logo'/>
                        <h1 className='add-h1'>Sounds</h1>
                    </div>
                        <form onSubmit={HandleSubmit} className='add-form-'>
                            <div className='add-form-div'>
                                <input name='name' placeholder='Nome' id='name' className='add-form-div-input' required></input>
                            </div>

                            <div className='add-form-div'>
                                <input name='lastName' placeholder='Sobrenome' id='lastName' className='add-form-div-input' required></input>
                            </div>

                            <div className='add-form-div'>

                                <input name='email' placeholder='E-mail' id='email' className='add-form-div-input' required></input>
                            </div>
                            <div className='add-form-div'>
                                <input name='password' type='password' placeholder='Senha' id='password' className='add-form-div-input' required></input>
                            </div>

                            <div className='add-form-div'>
                                <input name='cpf' placeholder='CPF' id='cpf' className='add-form-div-input' required></input>
                            </div>

                            <div className='add-form-div' style={{ width: '520' }}>
                                <input type='submit' value='Cadastrar' className='input-submit'></input>
                            </div>
                        </form>
                <p className='add-p'>Já tem uma conta?<Link className='add-p-span' to='/login'>Entre aqui</Link></p>
   
        </div>
    )
}
