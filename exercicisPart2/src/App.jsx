import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        {
            name: 'Arto Hellas',
            number: '39-44-6565652'
        }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterName, setFilterName ] = useState('')


    const handleChangeFilterName = (e) => {
        setFilterName(e.target.value)
    }

    const handleChangeName = (e) => {
        setNewName(e.target.value)
    }

    const handleChangeNumber = (e) => {
        setNewNumber(e.target.value)
    }
    const addNewPerson = e => {
        e.preventDefault()

       if (persons.find(p => p.name === newName) ) {
           alert(`${newName} is already added to phonebook`)

       }else {
            const newNameObj = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(newNameObj))
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>Filter shown with <input type="text" onChange={handleChangeFilterName} value={filterName} /></div>
            <h2>Add a new</h2>
            <form>
                <div>Name: <input type="text" value={newName} onChange={handleChangeName} /></div>
                <div>Number: <input type="text" value={newNumber} onChange={handleChangeNumber} /></div>
                <div>
                    <button type="submit" onClick={addNewPerson}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(p =>  p.name.toUpperCase().startsWith(filterName.toUpperCase()) && <div key={p.name}>{p.name} {p.number}</div> )}
        </div>
    )
}

export default App