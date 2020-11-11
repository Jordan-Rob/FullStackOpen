import React from 'react';

const Persons = ({person, delHandler}) => {
    return(
        <p>{person.name} -{ person.number }  <button onClick={delHandler} >delete</button></p>
    )
}

export default Persons;