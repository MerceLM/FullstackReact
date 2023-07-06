const baseUrl = 'http://localhost:3001/persons'

const createPerson = newPerson => {
    //Enviam la nova persona amb POST al servidor
    const request = fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(newPerson),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return request.then(response => response.json())

}

const updatePerson = newPerson => {
    const request = fetch(`${baseUrl}/${newPerson.id}`, {
        method: 'PUT',
        body: JSON.stringify(newPerson),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return request.then(response => response.json())
}

const deletePerson = id => {
    const request = fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    return request.then(response => response.json())
}

export default {createPerson, deletePerson, updatePerson}