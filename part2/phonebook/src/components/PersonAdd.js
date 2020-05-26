import React, {useState} from 'react'

const PersonAdd = ({persons, setPersons}) => {
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')
  
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
    const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
      console.log(event.target.value)
      setNewPhone(event.target.value)
    }
    return(
      <form onSubmit={addPerson}>
          <div>name: <input value={newName} onChange={handleNameChange}  /></div>
          <div>number: <input value={newPhone} onChange={handlePhoneChange} /></div>
          <div>
            <button type="submit" >add</button>
          </div>
        </form>
    )
  }

export default PersonAdd