export const Api={
    baseUrl: "http://localhost:3000/game",
    
    getAll:()=> fetch(Api.baseUrl)
}