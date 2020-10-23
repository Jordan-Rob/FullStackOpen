import React from 'react';

const Total = (props) => {

    const parts = props.parts
    const excercisesTotal = parts.reduce((sum, part) => {
      return sum + part.exercises
    }, 0)

    console.log(excercisesTotal)
  
    return(
      <>
        <p>Number of exercises {excercisesTotal}</p>
      </>
    )
  }
  
export default Total;  