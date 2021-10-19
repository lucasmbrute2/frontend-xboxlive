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
        console.log(payload)
        const response = await Api.post('user',payload)
        const body = await response.json()
        console.log(body)
        
        if(response.status===201){
            props.history.push("/")   
        }else{
            throw new Error('error')
        }
    }
    
    
    
    return(
        <div className='add'>
            <div className='add-title-container'>
                <img src='https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-high-tech-rings-logo.png'/>
                <h1 className='add-h1'>Sounds</h1>
            </div>
            <div className='add-form'>
                <form onSubmit={HandleSubmit}>
                    <input name='name' placeholder='Nome' id='name'></input>
                    
                    <input name='lastName' placeholder='Sobrenome' id='lastName'></input>
                    
                    <input name='email' placeholder='E-mail' id='email'></input>
                    
                    <input name='password' type='password' placeholder='Senha' id='password'></input>

                    <input name='cpf' placeholder='CPF' id='cpf'></input>
                    
                    <input type='submit' value='Cadastrar'></input>

                </form>
        
                <p>Já tem uma conta?<Link>Entre aqui</Link></p>
            </div>    
        </div>
    )
}
