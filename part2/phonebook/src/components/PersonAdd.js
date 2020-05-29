import React, {useState} from 'react'
import PersonService from '../services/persons'

const PersonAdd = ({persons, setPersons}) => {
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')
  
    const addPerson = (event)=>{
      event.preventDefault()
      if (newName.length === 0 && newPhone.length===0) {
        alert('You must add a name and a phone number')
      }else if (newName.length === 0) { 
        alert('You must add a name')
      }else if (newPhone.length === 0){
        alert('You must add a phone number')
      }else{
        if (persons.filter(p => p.name === newName).length > 0) {
          alert(newName + ' is already in the phonebook')
        }else{
          const newPerson = {
            name: newName,
            phone: newPhone
          }
          //add person to db
          PersonService.addPerson(newPerson)
          .then(returnedPerson =>{
            setPersons(persons.concat(returnedPerson))
          })
          setNewName('')
          setNewPhone('')
        }         
      }
    }
    const handleNameChange = (event) => {

      setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
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