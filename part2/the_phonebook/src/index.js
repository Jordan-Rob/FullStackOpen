import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id:0 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newObj = {
      name:newName,
      date: new Date().toISOString(),
      id: persons.length + 1
    }
    setPersons(persons.concat(newObj))
    setNewName('')
  }

  const inputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
          name: <input value={newName} onChange={inputChange} />
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map( person => <p key={person.id}> {person.name} </p> )}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
