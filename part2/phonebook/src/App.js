import React, { useState, useEffect } from 'react'
import PersonAdd from './components/PersonAdd'
import PersonsList from './components/PersonsList'
import PersonsFilter from './components/PersonsFilter'
import PersonService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [alertMessage, setAlertMessage] = useState(null)
  //In the filter component i just update the personFilter values, but the actual filtering (change data to load)
  //its done here inside the App.js, since  I need to to use the data after filtering in other components. I couldnt update more components at once.
  const [ personFilter, setPersonFilter ] = useState({
    active: false, filter:''
  })

  //hook effect, loads everytime there is a rebuild
  const hook = () =>{
  
      PersonService
        .getPersonsList()
        .then(list =>{
          console.log('Loaded persons List');
          setPersons(persons.concat(list))
  
        })
  
    }
  useEffect(hook,[]);

  //filteredPersons to load if filter is active
  const personsToLoad = personFilter.active
    ? persons.filter((element) => {
        return element.name.toLowerCase().includes(personFilter.filter.toLowerCase())
      })
    : persons
  

  //Notification to display
  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    
    return (
      <div className="alert">
        {message}
      </div>
    )
  }
 
    
    
  //page
  return (
    <div>
      <Notification message={alertMessage}/>
      <h2>Phonebook</h2>
      <PersonsFilter persons={persons} setPersonFilter={setPersonFilter}/>
      <h2>Add Person</h2>
      <PersonAdd setAlertMessage={setAlertMessage } persons={persons} setPersons={setPersons} />
      <h2>Persons</h2>
      <PersonsList setAlertMessage={setAlertMessage} persons={personsToLoad} setPersons={setPersons}/>
    </div>
  )
}

export default App