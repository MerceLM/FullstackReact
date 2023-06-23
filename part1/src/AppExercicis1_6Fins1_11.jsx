import './App.css'
import {useState} from "react";


const Button = props => (
    <button onClick={props.handleClick}> {props.text} </button>
)

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value} {props.text==="Positive: " && "%"}</td>
        </tr>
    )
}

const Statistics = (props) => {
    if (props.all === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
    return(
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                <StatisticLine text="Good: " value={props.good}/>
                <StatisticLine text="Neutral: " value={props.neutral}/>
                <StatisticLine text="Bad: " value={props.bad}/>
                <StatisticLine text="All: " value={props.all}/>
                <StatisticLine text="Average: " value={props.average}/>
                <StatisticLine text="Positive: " value={props.positive}/>
                </tbody>
            </table>
        </div>
    )
}

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    /*
    *  Ampliacio de les estadistiques
    */
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const incrementAll = () => {
        setAll(all + 1)
        averageAndPositiveCalc()
    }
    const handleClickGood = () => {
        setGood(good + 1)
        incrementAll()
    }
    const handleClickNeutral = () => {
        setNeutral(neutral + 1)
        incrementAll()
    }
    const handleClickBad = () => {
        setBad(bad + 1)
        incrementAll()
    }

    const averageAndPositiveCalc = () => {
        let av = (good - bad) / all
        setAverage(isNaN(av)? 0 : av)

        let posit = (good / all) * 100
        setPositive(isNaN(posit)? 0 : posit)
    }



    return (
        <>
            <div>
                <h1>Give feedback</h1>
                <Button handleClick={handleClickGood} text="Good" />
                <Button handleClick={handleClickNeutral} text="Neutral" />
                <Button handleClick={handleClickBad} text="Bad" />
            </div>

            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
        </>
    )
}

export default App
