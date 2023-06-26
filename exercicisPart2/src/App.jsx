import React, {useEffect, useState} from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
    const [ persons, setPersons ] = useState([ ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterName, setFilterName ] = useState('')

    useEffect(() => {
        console.log('effect a App')
        fetch('http://localhost:3001/persons')
            .then(response => response.json())
            .then(data => {
                console.log('data: ', data)
                setPersons(data)
            })
    }, [])
    console.log('render ', persons.length, ' persons')

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

       if (persons.find(p => p.name.toUpperCase() === newName.toUpperCase()) ) {
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
            <Filter filterName={filterName} handleChangeFilterName={handleChangeFilterName} />
            <h2>Add a new</h2>
            <PersonForm newName={newName} handleChangeName={handleChangeName} newNumber={newNumber} handleChangeNumber={handleChangeNumber} addNewPerson={addNewPerson} />
            <h2>Numbers</h2>
            <Persons persons={persons} filterName={filterName} />
        </div>
    )
}

export default App