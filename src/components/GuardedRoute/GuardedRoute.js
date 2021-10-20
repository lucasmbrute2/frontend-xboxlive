import { Redirect, Route } from "react-router";

export default function GuardedRoute({ component: Component, ...rest }){
    const auth = Boolean(localStorage.getItem("JWT"));// checa a chave JWT no local storage, se for True o usuário tem acesso a rota, se não, é direcionado para rota de cadastro
    return(
    <Route { ...rest } render={props=> 
        auth ===true ? <Component {...props} />: <Redirect to='/user/add'/>
    }/>
   
    )
} 