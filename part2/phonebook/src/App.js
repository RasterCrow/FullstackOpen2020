import React, { useState } from 'react'
import PersonAdd from './components/PersonAdd'
import PersonsList from './components/PersonsList'
import PersonsFilter from './components/PersonsFilter'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])

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