import { Redirect, Route } from "react-router";

export default function GuardedRoute({ component: Component, ...rest }){
    const auth = Boolean(localStorage.getItem("JWT"));// checa a chave JWT no local storage
    return(
    <Route { ...rest } render={props=> 
        auth ===true ? <Component {...props} />: <Redirect to='/user/add'/>
    }/>
   
    )
} 