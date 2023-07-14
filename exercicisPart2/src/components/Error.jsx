const Error = ({ missatge }) => {
    const errorStyle = {
        color: 'green',
        backgroundColor: 'lightgrey',
        border: 'green',
        fontStyle: 'italic'
    }

    if (missatge === null)
        return null

    return (
        <div style={errorStyle}>{missatge}</div>
    )
}

export default Error