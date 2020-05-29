import React, { useState, useEffect } from 'react'
import PersonAdd from './components/PersonAdd'
import PersonsList from './components/PersonsList'
import PersonsFilter from './components/PersonsFilter'
import PersonService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  
  //hook effect, loads everytime there is a rebuild
  const hook = () =>{
  
      PersonService
        .getPersonsList()
        .then(list =>{
          console.log(list)
          console.log('Loaded persons List');
          setPersons(persons.concat(list))
  
        })
  
    }
  useEffect(hook,[]);

  //In the filter component i just update the personFilter values, but the actual filtering (change data to load)
  //its done here inside the App.js, since  I need to to use the data after filtering in other components. I couldnt update more components at once.

  const [ personFilter, setPersonFilter ] = useState({
    active: false, filter:''
  })

  console.log('Filter Active :',personFilter.active)
  const personsToLoad = personFilter.active
    ? persons.filter((element) => {
        return element.name.toLowerCase().includes(personFilter.filter.toLowerCase())
      })
    : persons

  //page
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonsFilter persons={persons} setPersonFilter={setPersonFilter}/>
      <h2>Add Person</h2>
      <PersonAdd persons={persons} setPersons={setPersons} />
      <h2>Persons</h2>
      <PersonsList persons={personsToLoad}/>
    </div>
  )
}

export default App