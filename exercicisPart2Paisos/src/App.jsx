import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        console.log('effect a App')

        /*
        **** Fem la crida async / await perque hem d'esperar
        **** a tenir totes les dades de la resposta
         */
        const fetchData = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all')
            const newData = await response.json()
            console.log(newData)
            setCountries(newData)
        }

        fetchData()

    }, [])
    console.log('rendered ', countries.length, ' countries')


  return (
    <>
        {countries.map(c =>
            <div>{c.name.common}</div>

            )}

    </>
  )
}

export default App
