import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  
  return (
    <>
      <h1>{ props.course }</h1>
    </>
  )

}

const Part = (props) => {
  return(
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
    
  )
}

const Content = (props) => {
  
  return(
    <>
      < Part part={props.part1name} exercises={props.part1exercises} />
      < Part part={props.part2name} exercises={props.part2exercises} />
      < Part part={props.part3name} exercises={props.part3exercises} />
    </>
  )

}

const Total = (props) => {

  return(
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      < Header course = {course} />
      < Content part1name = {part1.name} part2name = {part2.name} part3name = {part3.name} 
      part1exercises = {part1.exercises} part2exercises = {part2.exercises} part3exercises = {part3.exercises}/>
      < Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

