import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({text, handleClick}) =>(
  <div>
    <button onClick={handleClick}>{text}</button>  
  </div>
)

const BestAnecdote = ({votes,anecdotes}) => {
  let max=0
  let indexMostVoted = 0

  //checks for the one with most votes, if more than one takes the first itfind
  for (let i=0; i<votes.length; i++) {
    console.log(max)
    if(votes[i]>max){
      max=votes[i]
      indexMostVoted=i
    }
  }
  //if all have 0 votes, it display a custom message
  if(max === 0){
    return(
      <div>
      <Title text='Anecdote with most votes'/>
        No anecdote has been voted today.
      </div>
    )
    //otherwise displays the one with most votes found
  }else{
    return(
      <div>
      <Title text='Anecdote with most votes'/>
      {anecdotes[indexMostVoted]}
      </div>
    )
  }
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setAll] = useState(Array(anecdotes.length).fill(0))
  
  //functions that takes a random number between 0 and anecdotes.length excluded
  const randomizeAnecdote = () =>{
    const min = 0
    const max = anecdotes.length
    const rand = Math.floor(min + Math.random() * (max - min))
    setSelected(rand)
  }
  
  //when you vote for an anecdote, it updates the votes array using a copy of it
  const voteForQuote = () =>{
    //create copy of array
    const votesCopy = [...votes]
    votesCopy[selected] +=1
    setAll(votesCopy)
  }
  return (
    <div>
      <Title text='Anecdote of the day'/>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button text='Vote' handleClick = {voteForQuote}/>
      <Button text='Random quote' handleClick = {randomizeAnecdote}/>
      
      <BestAnecdote votes={votes} anecdotes={props.anecdotes}/>
      
      
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
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)