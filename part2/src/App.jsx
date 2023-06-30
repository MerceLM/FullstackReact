import {useEffect, useState} from "react";
import Note from "../components/Note.jsx";

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('Afegir nova nota...')
    const [showAll, setShowAll] = useState(true)

    //Agafam dades del servidor amb el primer renderitzat i les guardam a l'estat
    useEffect(() => {
        console.log('effect a app')

        fetch('http://localhost:3001/notes')
            .then(response =>  response.json())
            .then(data => {
                console.log(data)
                setNotes(data)
            })
    }, [])
    console.log('render', notes.length, 'notes')

    const addNote = (e) => {
        e.preventDefault()

        //Preparam les dades de la nova nota
        const noteObj = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
        }

        //Enviam la nova nota amb POST al servidor
        fetch('http://localhost:3001/notes', {
            method: 'POST',
            body: JSON.stringify(noteObj),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                //Com ha anat bé, actualitzam els estats del llistat de notes i de nova nota
                setNotes(notes.concat(data))
                setNewNote('')
            })
    }

    const handleNoteChange = e => {
        console.log(e.target.value)
        setNewNote(e.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter(n => n.important === true)


    return (
        <div>
            <p>Part 2d</p>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>Show {showAll? 'only important notes' : 'all notes' }</button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default App