const Filter = (props) => {
    return (
        <div>Filter shown with <input type="text" onChange={props.handleChangeFilterName} value={props.filterName} /></div>
    )
}

export default Filter