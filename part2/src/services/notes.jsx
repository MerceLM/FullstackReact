const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request =  fetch(baseUrl)
    return request.then(response =>  response.json())
}

const create = newNote => {
    //Enviam la nova nota amb POST al servidor
    const request = fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(newNote),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return request.then(response => response.json())
}

const update = (id, newNote) =>{
   const request = fetch(`${baseUrl}/${id}`,{
       method: 'PUT',
       body: JSON.stringify(newNote),
       headers: {"Content-type": "application/json; charset=UTF-8"}
   })
   return request.then(response => response.json())
}

export default { getAll, create, update }