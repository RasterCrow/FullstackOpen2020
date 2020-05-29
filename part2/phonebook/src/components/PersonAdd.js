import React, {useState} from 'react'
import PersonService from '../services/persons'

const PersonAdd = ({persons, setPersons,setAlertMessage}) => {
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
          if( window.confirm(`${newName} is already in the phonebook, do you want to replace its phone number?`)){
            //get person id
            const person = persons.find((person)=> person.name===newName)
            const personWithNewPhone = {...person, phone:newPhone}

            PersonService
            .updatePersonNumber(personWithNewPhone.id,personWithNewPhone)
            .then(updatedPerson => {
              console.log('updated user')
              console.log(updatedPerson)
              setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson))
              setAlertMessage(`User ${updatedPerson.name} has been updated`)
              setTimeout(() => {
                setAlertMessage(null)
              }, 3000)
            })
            .catch(error => {
              console.log(`Errore ${error}`)
            })
          }
        }else{
          const newPerson = {
            name: newName,
            phone: newPhone
          }
          //add person to db
          PersonService.addPerson(newPerson)
          .then(returnedPerson =>{
            setPersons(persons.concat(returnedPerson))
            setAlertMessage(`User ${returnedPerson.name} has been added`)
            setTimeout(() => {
              setAlertMessage(null)
            }, 3000)
            setNewName('')
            setNewPhone('')
          })
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