import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({text, handleClick}) =>(
    <button onClick={handleClick}>{text}</button>  
  )

  const Statistic = ({text,value}) =>{
    return (
      <tr>
        <td>{text}</td>
        <td> {value}</td>
      </tr>
    )
  }
//Statistics component
const Statistics = ({goodNumber,badNumber,neutralNumber}) => {
  //do all the map before displaying
  let votesSum = badNumber + goodNumber + neutralNumber
  let average = (goodNumber-badNumber)/votesSum
  let positivePerc = goodNumber/votesSum*100

  if(votesSum === 0 ) {
    return(
      <div>No feedback given</div>
    )
  }else{
  /*if values are nan display as 0, not needed anymore
  if (isNaN(average)) average =0
  if (isNaN(positivePerc)) positivePerc =0
  */
    return (
      <div>
        <table>
          <tbody>
            <Statistic text='good' value={goodNumber}/>
            <Statistic text='neutral' value={neutralNumber}/>
            <Statistic text='bad' value={badNumber}/>
            <Statistic text='all' value={votesSum}/>
            <Statistic text='average' value={average}/>
            <Statistic text='positive' value = {positivePerc+' %'} />
          </tbody>
        </table>
      </div>
    )
  }
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {
    setGood(good+1)
  }
  const handleBadButton = () => {
    setBad(bad+1)
  }
  const handleNeutralButton = () => {
    setNeutral(neutral+1)
  }

  return (
    <div>
      <Title text='Give Feedback'/>
      <Button text='Good' handleClick={handleGoodButton}/>
      <Button text='Neutral' handleClick={handleNeutralButton}/>
      <Button text='Bad' handleClick={handleBadButton}/>
      <Title text='Statistics'/>
      <Statistics goodNumber={good} neutralNumber={neutral} badNumber={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)