import Courses from "../components/Courses.jsx";
import {useState} from "react";
import Note from "../components/Note.jsx";
import note from "../components/Note.jsx";

const App = (props) => {
    //const { notes } = props
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('Afegir nova nota...')
    const [showAll, setShowAll] = useState(true)

    const addNote = (e) => {
        e.preventDefault()
        const noteObj = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1
        }

        setNotes(notes.concat(noteObj))
        setNewNote('')
    }

    const handleNoteChange = e => {
        console.log(e.target.value)
        setNewNote(e.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter(n => n.important === true)


    return (
        <div>
            <p>Part 2b. Fins exercicis 2.6-2.10</p>
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