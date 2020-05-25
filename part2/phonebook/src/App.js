import React, { useState } from 'react'


const Numbers = ({numbers}) => {
  return (
    numbers.map(n => <li key={n.name}>{n.name}</li>)
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event)=>{
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    console.log('person name : ',newPerson.name)
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}  />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers numbers={persons}/>
    </div>
  )
}

export default App