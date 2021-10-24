import { Api } from "../../../Api/Api"

export default function Login(props){
    
    const HandleSubmit = async (e)=>{
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value
        
        const payload = {
            email,
            password
        }
    
        const response = await Api.post('login',payload)
        const body = await response.json()
                
        if(response.status===200){
            const accessToken = body.accessToken
            
            localStorage.setItem("JWT",accessToken)
            
            localStorage.setItem('userID',body.userID)
            
            props.history.push('/')
        
        }else{
            throw new Error()
        }
    }
    
    return(
        <div>
            <form onSubmit={HandleSubmit}>

                <div>
                    <input name='email' placeholder='Email'></input>
                </div>

                <div>
                    <input name='password' type='password' placeholder='Senha'></input> 
                </div>

                <div>
                    <input type='submit' value='Login'></input>
                </div>
            
            </form>
        </div>
        
    )    
}