import './App.css'

const Header = (props) => {
    console.log(props)
    return(
        <h1>{props.nomCurs}</h1>
    )
}

const Content = (props) => {
    return(
        <>
            <p>
                {props.parts[0].nom} {props.parts[0].exercicis}
            </p>
            <p>
                {props.parts[1].nom} {props.parts[1].exercicis}
            </p>
            <p>
                {props.parts[2].nom} {props.parts[2].exercicis}
            </p>
        </>
    )
}

const Total = (props) => {
    return (
        <p>Nombre d'exercicis { props.parts[0].exercicis + props.parts[1].exercicis + props.parts[2].exercicis}</p>
    )
}

function AppExFins1_5() {
    const curs = {
        nom : "Half Stack application development",
        parts : [
            {
                nom: "Fonaments de React",
                exercicis: 10
            },
            {
                nom: "Ús de props per passar dades",
                exercicis: 7
            },
            {
                nom: "Estat d'un component",
                exercicis: 14
            }
        ]
    }

    return (
    <div>
        <Header nomCurs={curs.nom} />
        <Content parts={curs.parts} />
        <Total parts={curs.parts} />
    </div>
  )
}

export default AppExFins1_5
