const Error = ({ missatge, error }) => {
    const okStyle = {
        color: 'green',
        backgroundColor: 'lightgrey',
        border: 'green',
        fontStyle: 'italic'
    }

    const errorStyle = {
        color: 'red',
        backgroundColor: 'lightgrey',
        border: 'red'
    }

    if (missatge === null)
        return null

    return (
        <div style={error? errorStyle : okStyle}>{missatge}</div>
    )
}

export default Error