import {useEffect, useState} from "react";
import Note from "../components/Note.jsx";
import noteService from './services/notes.jsx'
import Notification from "../components/Notification.jsx";
import Footer from "../components/Footer.jsx";

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('Afegir nova nota...')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('Some error happened...')

    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const noteObj = {...note, important: !note.important}

        noteService.update(id, noteObj)
            .then(data => {
                //Actualitzam el llistat de notes
                setNotes(notes.map(n => n.id !== id ? n : data))
            })
            .catch(error => {
                setErrorMessage(`Note ${note.content} was already removed from server`)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })


    }

    //Agafam dades del servidor amb el primer renderitzat i les guardam a l'estat
    useEffect(() => {
        console.log('effect a app')

        noteService.getAll()
            .then(data => {
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
        noteService.create(noteObj)
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
            <p>Part 2e</p>
            <h1 className="note">Notes</h1>
            <Notification missatge={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>Show {showAll? 'only important notes' : 'all notes' }</button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Save</button>
            </form>
            <Footer />
        </div>
    )
}

export default App