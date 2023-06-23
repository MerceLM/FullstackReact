import './App.css'
import {useState} from "react";

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => (
    <button onClick={props.handleClick} >{props.text}</button>
)



function App() {
    const [selected, setSelected] = useState(0)
    //Cream un array de puntuacio de votacions incialitzat a 0 per cada anedota
    const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))

    const voteAnecdote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }

    const nextAnecdote = () => {
        let rndm = Math.floor(Math.random() * anecdotes.length-1) + 1
        setSelected(rndm)
    }


    return (
        <>
            <h1>Exercicis a partir 1.12</h1>
            <div>
                <h2>Anecdote of the day</h2>
                <p>{anecdotes[selected]}</p>
                <p>Has {points[selected]} votes</p>
            </div>
            <Button handleClick={voteAnecdote} text="Vote this anecdote" />
            <Button handleClick={nextAnecdote} text="Next anecdote" />
            <div>
                <h2>Anecdote with most votes</h2>
                <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
                <p>Has {Math.max(...points)} votes</p>
            </div>
        </>
    )
}


export default App
