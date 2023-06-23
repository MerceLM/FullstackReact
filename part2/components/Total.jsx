import React, {useState} from "react";

const Total = ({parts}) => {
    const exercises = parts.map(p => p.exercises)
    const calcul = exercises.reduce(function totalExercicis(calcul, exercise) {
        return calcul + exercise
    })

    return <p><strong>Total of {calcul} exercises</strong></p>
}


export default Total