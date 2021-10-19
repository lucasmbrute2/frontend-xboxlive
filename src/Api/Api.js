export const Api={
    baseUrl: "http://localhost:3000/",
    
    getAll:(path)=> fetch(Api.baseUrl+path),
    
    getById:(path,id)=> fetch(`${Api.baseUrl}${path}/${id}`),
    
    post:(path,body)=> {
        return fetch(Api.baseUrl+path,{
        method:"POST",
        headers: new Headers({       
        }),
        body: JSON.stringify(body)
    })},
    
    update:(path,body,id)=>{
        return fetch(Api.baseUrl+path+"/update/"+id,{
        method:"PUT",
        headers: new Headers({
            "Content-type": "application/json"
        }),
        body:JSON.stringify(body)
    })},
    delete: (path,body,id)=> {
        return fetch(Api.baseUrl+path+"/delete/"+id,{
        method: "DELETE",
        headers: new Headers({
            "Content-type":"application/json"
        }),
        body:JSON.stringify(body)
    })}

}