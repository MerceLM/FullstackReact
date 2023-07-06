import React from "react";

const Notification = ({ missatge }) => {
    if (missatge === null)
        return null

    return (
        <div className="error">
            {missatge}
        </div>
    )
}

export default Notification