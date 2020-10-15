import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => {
  return(
    <button style={{ float: "Left"}} onClick={handleClick} >{text}</button>
  )
}

/*
const Display = ({value, text}) => { 
  
  return(
    <p>{text} {value}</p>
  )
}


const Total = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  return(
    <p>all {total}</p>
  )
}

const Avg = ({good, neutral, bad}) => {
  const av = (good + neutral + bad)/3
  return(
    <p>average {av}</p>
  )
}

const Percent = ({good, neutral, bad}) => {
  const total = (good + neutral + bad)
  const positive = (good / total) * 100
  return(
    <p>positive {positive} %</p>
  )
}

*/

const Statistic = ({value, text}) => { 

  if(value.constructor.name === "Array" && text === 'all' ) {
    const total = value[0] + value[1] + value[2]
    return(
      <tr>
        <td>{text}</td>
        <td>{total}</td>
      </tr>
    )
  }else if(value.constructor.name === "Array" && text === 'average' ) {
    const av = (value[0] + value[1] + value[2])/3
    return(
      <tr>
        <td>{text}</td>
        <td>{av}</td>
      </tr>
    )
  }else if(value.constructor.name === "Array" && text === 'positive' ) {
    const total = (value[0] + value[1] + value[2])
    const positive = (value[0] / total) * 100
    return(
      <tr>
        <td>{text}</td>
        <td>{positive} %</td>
      </tr>
    )
  }
  
  return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}



const Statistics = ({good, neutral, bad }) => {

  if ((good + neutral + bad ) === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const values = [good, neutral, bad]

  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          <Statistic value={good} text='good' /> 
          <Statistic value={neutral} text='neutral' /> 
          <Statistic value={bad} text='bad' /> 
          <Statistic value={values} text='all' />
          <Statistic value={values} text='average' />
          <Statistic value={values} text='positive' />
        </tbody>
      </table>
    </div>
  )
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  

  const neutralClick = () => setNeutral(neutral + 1)
  

  const badClick = () => setBad(bad + 1) 
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      
      <h1 style={{ marginTop: "70px"}}>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
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

