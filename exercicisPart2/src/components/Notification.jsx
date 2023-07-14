const Notification = ({ missatge }) => {
    if (missatge === null)
        return null

    return (
        <div>
            Filter shown with <input type="text" onChange={props.handleChangeFilterName} value={props.filterName} />
        </div>
    )
}

export default Notification