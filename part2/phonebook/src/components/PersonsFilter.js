import React from 'react' 

//PersonsFilter only updates the filter parameters based on user input.
//The actual filter is done inside the App.js since from there it loads all the Persons

const PersonsFilter = (props) => {
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        props.setPersonFilter({
          active : true, filter : event.target.value
        })
      }
      return(
        <div>filter person with: <input onChange={handleFilterChange} /></div>
      )
  }

  export default PersonsFilter