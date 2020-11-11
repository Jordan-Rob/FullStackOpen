import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';


const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNum, setNewNum] = useState('')
    const [filters, setFilter] = useState('')

    useEffect( () => {
      console.log('Effect')

      axios
        .get('http://localhost:3001/persons')
        .then( response => {
          console.log('promise fullfilled')
          setPersons(response.data)
        })

    } , [])
  
    const filtered = persons.filter( person => person.name.includes(filters) )

    const addPerson = (event) => {
      event.preventDefault()
  
      const existent = persons.find(person => person.name === newName)
  
      if (existent){
        window.alert(`${newName} already exists`)
      }else {
      const newObj = {
        name:newName,
        number:newNum,
        date: new Date(),
        }
        
        axios
          .post('http://localhost:3001/persons', newObj)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNum('')
          })
      }
      
    }
  
    const inputChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }

    const numChange = (event) => {
        console.log(event.target.value)
        setNewNum(event.target.value)
      }
    
    const filterChange = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value)
    }
  
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Filter val={filters} handler={filterChange} />
        
        <h3>Add a new</h3>

        <PersonForm formFunc={addPerson} val1={newName} handler1={inputChange} val2={newNum} handler2={numChange} />
        
        <h2>Numbers</h2>

        <Persons arr={filtered} />

      </div>
    )
  }

export default App;