import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1><b>{course.name}</b></h1>
  )
}

//for each part in the course array, sum the nunmber of exercises
//now here I could also user forEAch, since I don't need to save the results in an array.
const Total = ({ course }) => {
  const sum = course.parts.reduce((accumulator,currentValue)=>{
      //console.log('accumulator : ',accumulator ,' parts : ',currentValue)
      return accumulator+=currentValue.exercises

  },0)
  
  /*
  const sum =0;
  course.parts.map(part => sum+=part.exercises)
  //course.parts.forEach(part => sum+=part.exercises)
  */
  return(
    <p><b>Total of exercises {sum}</b></p>
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

const Course =({courses}) => {
  return (
    <div>
    {courses.map(course =>
      <div key={course.id}>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )}
    </div>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Course courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))