import React from "react";

const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }
    return (
        <div style={footerStyle}>
            <br/>
            <em>Note app, department of Computer Science, University of Gotham 2056</em>
        </div>
    )
}


export default Footer