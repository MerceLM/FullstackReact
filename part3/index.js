const express = require('express')
const {request, response} = require("express");
const app = express()

app.use(express.json()) //Per poder accedir a les dades enviades en el body d'una peticio POST


let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]
app.get('/', (request, response) => {
    response.send('<h1>Hello world!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const note = notes.find(n => n.id === id)
    note? response.json(note) : response.status(404).end() //end() envia una resposta sense dades
})

app.delete('/api/notes/:id', (request, response) => {
    const id = parseInt(request.params.id)
    notes = notes.filter(n => n.id !== id)
    response.status(204).end() //Codi 204 quan es fa un delete amb exit
})

const generateId = () => {
    //notes ha de dur ...(sintaxi spread) per convertir l'array en nombres individuals i aixi poder calcular el maxim
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
    return maxId + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body

    if(!body.content){
        //Return és necessari per evitar q continui l'execucio i es crei una nota sense content
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId()
    }

    notes = notes.concat(note)
    response.json(note)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)