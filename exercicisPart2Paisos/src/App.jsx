import {Fragment, useEffect, useState} from 'react'
import './App.css'

function App() {
    const [countries, setCountries] = useState([])
    const [filterResult, setFilterResult] = useState([])
    const [filter, setFilter] = useState('')
    const [paisShow, setPaisShow] = useState([])

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

    function handleFilterChange(e){
        let valor = e.target.value
        setFilter(valor)
        setPaisShow([])
        if (valor !== ''){
            let paisosTrobats = countries.filter(c => c.name.common.toUpperCase().startsWith(valor.toUpperCase()))
            setFilterResult(paisosTrobats)
        }else{
            setFilterResult([])
        }
    }

    function renderSwitch (fr){
        if ( fr.length > 10) {
            return <div>Too many matches, specify another filter</div>

        }else if (fr.length === 1) {
            let pais = fr[0]
            let idiomes = Object.values(pais.languages)
            return (
                <Fragment>
                    <h3>{pais.name.common}</h3>
                    <div>Capital: {pais.capital.map(p => p)}</div>
                    <p>Population: {pais.population}</p>
                    <h3>Languages</h3>
                    <ul>{idiomes.map(pa => <li key={pa}>{pa}</li>)}</ul>
                    <img alt="flag" width="200px"  key="bandera" src={pais.flags.svg} />
                </Fragment>
            )

        }else {
            return fr.map((c, index) =>
                <Fragment>
                    <div key={index}>
                        {c.name.common} <button key={c.ccn3} type="text" value={c.name.common} onClick={seleccionarPais} name="veurePaisBt">Show</button>
                    </div>
                </Fragment>
            )
        }
    }

    function seleccionarPais(e){
        e.preventDefault()
        setPaisShow(filterResult.filter(pclick => pclick.name.common === e.target.value))
    }

  return (
    <>
        <div>
            <h1>Exercici 2.13</h1>
            <h2>Search countries <input type="text" value={filter} onChange={handleFilterChange} /></h2>
        </div>
        <div>{renderSwitch(filterResult)}</div>
        <div>{renderSwitch(paisShow)}</div>
    </>
  )
}

export default App
