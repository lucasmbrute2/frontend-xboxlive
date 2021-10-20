export const Api={
    baseUrl: "http://localhost:3000/",
    
    authHeader: ()=> ({
        Authorization : "Bearer "+localStorage.getItem('JWT')
    }),
    
    getAll:(path,auth)=> fetch(Api.baseUrl+path,{
        method: "GET",
        headers: auth? new Headers(Api.authHeader()): undefined
    }),
    
    getById:(path,id,auth)=> fetch(`${Api.baseUrl}${path}/${id}`,{
        method: "GET",
        headers: auth ? new Headers(Api.authHeader()): undefined
    }),
    
    post:(path,body,auth)=> {
        return fetch(Api.baseUrl+path,{
        method:"POST",
        headers: new Headers({       
            "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
    })},
    
    update:(path,body,id,auth)=>{
        return fetch(Api.baseUrl+path+"/update/"+id,{
        method:"PUT",
        headers: new Headers({
            "Content-type": "application/json"
        }),
        body:JSON.stringify(body)
    })},
    delete: (path,body,id,auth)=> {
        return fetch(Api.baseUrl+path+"/delete/"+id,{
        method: "DELETE",
        headers: new Headers({
            "Content-type":"application/json"
        }),
        body:JSON.stringify(body)
    })}

}