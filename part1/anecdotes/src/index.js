import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, selected}) => {
  return(
    <div>
      <p>{selected}</p>
      <button onClick={handleClick}>next anecdote</button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState('')
  const arr = props.anecdotes

  const randomGen = ()=>{ 
    setSelected(arr[Math.floor(Math.random() * arr.length)])
  }

  return (
    <div>
      <Button handleClick={randomGen} selected={selected}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
