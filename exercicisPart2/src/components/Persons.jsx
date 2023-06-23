import React from "react";

const Persons = (props) => {
    return (
        props.persons.map(p =>
            p.name.toUpperCase().startsWith(props.filterName.toUpperCase()) && <div key={p.name}>{p.name} {p.number}</div>
        )
    )
}

export default Persons