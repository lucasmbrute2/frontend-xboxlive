export const Api={
    baseUrl: "http://localhost:3000/",
    
    getAll:(path)=> fetch(Api.baseUrl+path),
    getById:(path,id)=> fetch(Api.baseUrl+path),
    update:(path,body,id)=>fetch(Api.baseUrl+path+"/add"+id,{
        method:"POST",
        headers: new Headers({
            "Content-type": "application/json"
        }),
        body:JSON.stringify(body)
    }),
    delete: (path,body,id)=> fetch(Api.baseUrl+path+"/delete"+id,{
        method: "DELETE",
        headers: new Headers({
            "Content-type":"application/json"
        }),
        body:JSON.stringify(body)
    })

}