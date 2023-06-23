import Courses from "../components/Courses.jsx";
import {useState} from "react";
import Note from "../components/Note.jsx";
import note from "../components/Note.jsx";

const App = (props) => {
    //const { notes } = props
    const [notes, setNotes] = useState(props.notes)



    return (
        <div>
            <p>Part 2b. Fins exercicis 2.6-2.10</p>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} note={note} />
                )}
            </ul>
        </div>
    )
}

export default App