import './App.css'
import React, {useState} from 'react'


const History = props => {
    if(props.allClicks.length === 0){
        return (
            <div>L'aplicació s'usa emprant els botons</div>
        )
    }
    return(
        <div>Historial de clicks: {props.allClicks.join(' ')}</div>
    )
}

const Display = props => <div>{props.value}</div>

const Button = props => (
    <button onClick={props.onClick}>
        {props.text}
    </button>
)

const ButtonValue = props => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

function AppExFins1_6() {
    const [leftClick, setLeftClick] = useState(0)
    const [rightClick, setRightClick] = useState(0)
    const [allClicks, setAllClicks] = useState([])

    const [value, setValue] = useState(10)
    const setToValue = newValue => setValue(newValue)

    const handleLeftClick = () => {
        setLeftClick (leftClick + 1 )
        setAllClicks(allClicks.concat('L'))
    }
    const handleRightClick = () => {
        setRightClick( rightClick +1 )
        setAllClicks(allClicks.concat('R'))
    }

    return (
        <>
            <div>
                <h1>Part 1. Apartat d -- Depuración de aplicaciones React</h1>
                <Display value={value} />
                <ButtonValue handleClick={() => setToValue(1000)} text = "Mil" />
                <ButtonValue handleClick={() => setToValue(100)} text = "Cent" />
                <ButtonValue handleClick={() => setToValue(10)} text = "Deu" />

            </div>
            <div>
                {leftClick}
                <Button onClick={handleLeftClick} text="Esquerra" />
                <Button onClick={handleRightClick} text="Dreta" />
                {rightClick}
                <History allClicks={allClicks} />
            </div>
        </>
  )
}

export default AppExFins1_6
