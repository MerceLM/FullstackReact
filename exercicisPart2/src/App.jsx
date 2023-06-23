import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')


    const handleChangeName = (e) => {
        setNewName(e.target.value)
    }
    const addNewPerson = e => {
        e.preventDefault()

       if (persons.find(p => p.name === newName) ) {
           alert(`${newName} is already added to phonebook`)
       }else {
            const newNameObj = {
                name: newName
            }
            setPersons(persons.concat(newNameObj))
            setNewName('')
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    Name: <input type="text" value={newName} onChange={handleChangeName} />
                </div>
                <div>
                    <button type="submit" onClick={addNewPerson}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(p =>   <div key={p.name}>{p.name}</div> )}
        </div>
    )
}

export default App