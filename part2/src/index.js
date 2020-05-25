import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

//for each part in the course array, sum the nunmber of exercises
//now here I could also user forEAch, since I don't need to save the results in an array.
const Total = ({ course }) => {
  let sum =0;
  course.parts.map(part => sum+=part.exercises)
  //course.parts.forEach(part => sum+=part.exercises)
  return(
    <p>Number of exercises {sum}</p>
  ) 
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

//
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.id} part={part} /> )}
    </div>
  )
}

const Course =({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))