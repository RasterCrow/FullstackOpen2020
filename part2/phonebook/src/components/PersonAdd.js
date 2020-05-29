import React, {useState} from 'react'
import axios from 'axios'

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
          axios
          .post('http://localhost:3001/persons', newPerson)
          .then(response =>{
            console.log('added person');
            //updates list of persons with newest person
            setPersons(persons.concat(response.data))
          })
          setNewName('')
          setNewPhone('')
        }         
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