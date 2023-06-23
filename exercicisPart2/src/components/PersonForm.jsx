import React from "react";

const PersonForm = (props) => {
    return (
        <form>
            <div>Name: <input type="text" value={props.newName} onChange={props.handleChangeName} /></div>
            <div>Number: <input type="text" value={props.newNumber} onChange={props.handleChangeNumber} /></div>
            <div>
                <button type="submit" onClick={props.addNewPerson}>add</button>
            </div>
        </form>
    )
}

export default PersonForm