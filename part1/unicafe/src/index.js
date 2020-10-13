import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => {
  return(
      <button style={{ float: "Left"}} onClick={handleClick} >{text}</button>
  )
}

const Display = ({state, text}) => {
  return(
  <p>{text} {state}</p>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1) 
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      
      <h1 style={{ marginTop: "70px"}}>statistics</h1>
      <Display state={good} text='good' />
      <Display state={neutral} text='neutral' />
      <Display state={bad} text='bad' />
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
