import React, {useEffect, useState} from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import personsService from "./services/persons.jsx";
import Error from "./components/Error.jsx";

const App = () => {
    const [ persons, setPersons ] = useState([ ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterName, setFilterName ] = useState('')
    const [ successOp, setSuccessOp ] = useState('')

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

        const newNameObj = {
            name: newName,
            number: newNumber
        }

        let personaExistent = persons.find(p => p.name.toUpperCase() === newName.toUpperCase())
        if (personaExistent) {
          if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
              newNameObj.id = personaExistent.id
              personsService.updatePerson(newNameObj)
                  .then(data => {
                      setPersons(persons.map(p => p.id !== personaExistent.id ? p : data))
                      setNewName('')
                      setNewNumber('')
                      setSuccessOp(`${personaExistent.name}  updated`)
                      setTimeout(() => {
                          setSuccessOp(null)
                      }, 5000)
                  })
          }
       }else {
            personsService.createPerson(newNameObj)
                .then(data => {
                    setPersons(persons.concat(data))
                    setNewName('')
                    setNewNumber('')
                    setSuccessOp(`${newNameObj.name}  created`)
                    setTimeout(() => {
                        setSuccessOp(null)
                    }, 5000)
                })
        }
    }

    const deletePersonOf = (id) => {

        if (persons.find(p => p.id === id)){
            personsService.deletePerson(id)
                .then(data => {
                    setPersons(persons.filter(p => p.id !== id))
                })
        }else{
            alert (`El contacte no es troba a l'agenda i no se pot eliminar`)
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Error missatge={successOp} />
            <Filter filterName={filterName} handleChangeFilterName={handleChangeFilterName} />
            <h2>Add a new</h2>
            <PersonForm newName={newName} handleChangeName={handleChangeName} newNumber={newNumber} handleChangeNumber={handleChangeNumber} addNewPerson={addNewPerson} />
            <h2>Numbers</h2>
            {persons.map(p =>
                <Persons key={p.id} person={p} filterName={filterName} deletePerson={() => deletePersonOf(p.id)} />
            )}
        </div>
    )
}

export default App