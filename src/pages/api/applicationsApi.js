export const myApplicationPromiss = (email) =>{
   return fetch(`http://localhost:3000/application?email=${email}`).then(res=>res.json())
}