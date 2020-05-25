import React, { useState } from 'react'


const Persons = ({persons}) => {
  return (
    persons.map(n => <li key={n.name}>{n.name} {n.phone}</li>)
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ personFilter, setPersonFilter ] = useState({
    active: false, filter:''
  })

  const addPerson = (event)=>{
    event.preventDefault()
    
    if (persons.filter(p => p.name === newName).length > 0) {
      alert(newName + ' is already in the phonebook')
    }else{
      const newPerson = {
        name: newName,
        phone: newPhone
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }
 
  console.log('Filter Active :',personFilter.active)
  const personsToLoad = personFilter.active
    ? persons.filter((element) => {
        return element.name.toLowerCase().includes(personFilter.filter.toLowerCase())
      })
    : persons
    
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setPersonFilter({
      active : true, filter : event.target.value
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter person with: <input onChange={handleFilterChange} /></div>
      <h2>Add Person</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}  /></div>
        <div>number: <input value={newPhone} onChange={handlePhoneChange} /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={personsToLoad}/>
    </div>
  )
}

export default App