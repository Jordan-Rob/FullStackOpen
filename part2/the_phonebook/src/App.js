import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';
import Notification from './components/Notification'


const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNum, setNewNum] = useState('')
    const [filters, setFilter] = useState('')
    const [message, setMessage] = useState('some notification')

    useEffect( () => {
      console.log('Effect')

      personsService
        .getAll()
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
        window.confirm(`${newName} is already added to phonebook, replace the 
        old number with a new one?`)

        const exisPerson = persons.find(person => person.name === newName)
        const changedPerson = { ...exisPerson, number:newNum}

        personsService
          .update(exisPerson.id, changedPerson)
          .then( response => {
            setPersons(persons.map( person => person.id !== exisPerson.id? person:response.data))
            setMessage(
              `${changedPerson.name}'s number was updated successfully`
              )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            setNewName('')
            setNewNum('')
          })

      }else {
      const newObj = {
        name:newName,
        number:newNum,
        date: new Date(),
        }
        
        personsService
          .create(newObj)
          .then(response => {
            setPersons(persons.concat(response.data))
            setMessage(
              `${newObj.name} was added successfully`
              )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
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

    const delHandler = (id) => {
      const person = persons.find( person => person.id === id)
      window.confirm(`Are you sure you want to delete ${person.name}`)
      personsService
        .deleteRes(person.id)
        .then(response => {
          console.log(response)
          const newPersons = persons.filter(person => person.id !== id)
          setPersons(newPersons)
        })
    }
  
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Notification message={message} />
        <Filter val={filters} handler={filterChange} />
        
        <h3>Add a new</h3>

        <PersonForm formFunc={addPerson} val1={newName} handler1={inputChange} val2={newNum} handler2={numChange} />
        
        <h2>Numbers</h2>
        { filtered.map(person => <Persons person={person} delHandler={() => delHandler(person.id)} />) }

      </div>
    )
  }

export default App;