import React from "react";

const Persons = ({person, filterName, deletePerson}) => {

    return (
        person.name.toUpperCase().startsWith(filterName.toUpperCase()) && <div key={person.name}>{person.name} {person.number} <button key={person.id} onClick={deletePerson}>Delete</button></div>
    )
}

export default Persons