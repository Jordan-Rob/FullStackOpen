import React, {useState} from 'react';

const App = () => {
    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas', id:0 }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNum, setNewNum] = useState('')
  
    const addPerson = (event) => {
      event.preventDefault()
  
      const existent = persons.find(person => person.name === newName)
  
      if (existent){
        window.alert(`${newName} already exists`)
      }else {
      const newObj = {
        name:newName,
        phone:newNum,
        date: new Date().toISOString(),
        id: persons.length + 1
        }
  
        setPersons(persons.concat(newObj))
        setNewName('')
        setNewNum('')
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
  
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
            <div> name: <input value={newName} onChange={inputChange} /> </div>
            <div> number: <input value={newNum} onChange={numChange} /> </div>
            <button type="submit">add</button>
        </form>
        <h2>Numbers</h2>
        {persons.map( person => <p key={person.id}> {person.name} - {person.phone} </p> )}
      </div>
    )
  }

export default App;