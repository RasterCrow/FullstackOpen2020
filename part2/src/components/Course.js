import React from 'react';
//Title of the course
const Header = ({ course }) => {
    return (
      <h1><b>{course.name}</b></h1>
    )
  }
  
  //list of parts in course
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} part={part} /> )}
      </div>
    )
  }
  //Each part of the course
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  //sum of all the number of exercises in the course
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
  
  //Entire course
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
  
  export default Course