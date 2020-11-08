import React from 'react';

const Persons = ({arr}) => {
    return(
        arr.map( person => <p key={person.id}> {person.name} - {person.number} </p> )
    )
}

export default Persons;