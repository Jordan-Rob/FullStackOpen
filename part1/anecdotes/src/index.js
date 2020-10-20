import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Display = ({state}) => {
  if( Number.isInteger(state)){
    return(
      <p>has {state} votes</p>
    )
  }
  return (
    <p>{state}</p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState('')
  const [votes, setVotes] = useState({ 0:0 , 1:0, 2:0, 3:0, 4:0, 5:0 })
  const arr = props.anecdotes

  const randomGen = () => { 
    setSelected(arr[Math.floor(Math.random() * arr.length)])
  }

  const vote = () => {
    if (selected === 'If it hurts, do it more often'){
      const newVotes = {
        ...votes,
        0:votes[0] + 1
      }
      setVotes(newVotes)
    }else if (selected === 'Adding manpower to a late software project makes it later!'){
      const newVotes = {
        ...votes,
        1:votes[1] + 1
      }
      setVotes(newVotes)
    }else if (selected === 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'){
      const newVotes = {
        ...votes,
        2:votes[2] + 1
      }
      setVotes(newVotes)
    }else if (selected === 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'){
      const newVotes = {
        ...votes,
        3:votes[3] + 1
      }
      setVotes(newVotes)
    }else if (selected === 'Premature optimization is the root of all evil.'){
      const newVotes = {
        ...votes,
        4:votes[4] + 1
      }
      setVotes(newVotes)
    }else if (selected === 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'){
      const newVotes = {
        ...votes,
        5:votes[5] + 1
      }
      setVotes(newVotes)
    }
    
  }

  if (selected === 'If it hurts, do it more often'){
    return (
    <div>
      <Display state={selected} />
      <Display state={votes[0]} />
      <Button handleClick={vote} text='vote' />
      <Button handleClick={randomGen} text='next anecdote' />
    </div>
  )  
  }else if (selected === 'Adding manpower to a late software project makes it later!'){
    return (
    <div>
      <Display state={selected} />
      <Display state={votes[1]} />
      <Button handleClick={vote} text='vote' />
      <Button handleClick={randomGen} text='next anecdote' />
    </div>
  )    
  }else if (selected === 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'){
    return (
    <div>
      <Display state={selected} />
      <Display state={votes[2]} />
      <Button handleClick={vote} text='vote' />
      <Button handleClick={randomGen} text='next anecdote' />
    </div>
  )    
  }else if (selected === 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'){
    return (
    <div>
      <Display state={selected} />
      <Display state={votes[3]} />
      <Button handleClick={vote} text='vote' />
      <Button handleClick={randomGen} text='next anecdote' />
    </div>
  )    
  }else if (selected === 'Premature optimization is the root of all evil.'){
    return (
    <div>
      <Display state={selected} />
      <Display state={votes[4]} />
      <Button handleClick={vote} text='vote' />
      <Button handleClick={randomGen} text='next anecdote' />
    </div>
  )    
  }else if (selected === 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'){
    return (
    <div>
      <Display state={selected} />
      <Display state={votes[5]} />
      <Button handleClick={vote} text='vote' />
      <Button handleClick={randomGen} text='next anecdote' />
    </div>
  )    
  }
  return (
    <div>
      <Button handleClick={vote} text='vote' />
      <Button handleClick={randomGen} text='next anecdote' />
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
