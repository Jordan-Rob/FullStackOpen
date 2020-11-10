import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
    const [countries, setCountries] = useState([])
    const [filters, setFilters] = useState('')

    const filtered = countries.filter(country => country.name.includes(filters))


    useEffect( () => {
        console.log('Effect')

        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then( response => {
                console.log('promise fulfilled')
                setCountries(response.data)
            })

    } , [])


    const filterChange = (event) => {
        console.log(event.target.value)
        setFilters(event.target.value)
    }


    return (
        <div>
            <div>
                find country: <input value={filters} onChange={filterChange} />
            </div>
            
            <ul>
                { filtered.length > 10 && filters !=='' ? <div>Too many matches specify another filter</div>:
                  filtered.length === 1? filtered.map(country => 
                    <div>
                        <h2>{country.name}</h2>
                        <p>capital {country.capital}</p>
                        <p>population {country.population}</p>
                        <h4>Languages</h4>
                        <ul>
                            {country.languages.map( lang => <li>{lang.name}</li>)}
                        </ul>
                        <img style={{ height:'160px', marginTop:'70px' }} src={country.flag}></img>
                    </div>):
                  filtered.map(country => <li>{country.name}</li>) }
            </ul>
        </div>
    )


}

export default App;