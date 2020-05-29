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
        //retrieve latest info from server
        let updatedPersons;
        PersonService
        .getPersonsList()
        .then(list =>{
          console.log('Loaded persons List');
          updatedPersons = persons.concat(list)
          //check for person already added
          if (updatedPersons.filter(p => p.name === newName).length > 0) {
            //if already in phonebook, asks for updating the phone number
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
                setAlertMessage({message:`User ${updatedPerson.name} has been updated`,type:'alert'})
                setTimeout(() => {
                  setAlertMessage({message:null, type:null})
                }, 5000)
              })
              .catch(error => {
                console.log(`Errore ${error}`)
                setAlertMessage({message:`User ${personWithNewPhone.name} has already been removed from the server.`,type:'error'})
                setTimeout(() => {
                  setAlertMessage({message:null, type:null})
                }, 5000)
              })
            }
            //else adds as new person
          }else{
            const newPerson = {
              name: newName,
              phone: newPhone
            }
            //add person to db
            PersonService.addPerson(newPerson)
            .then(returnedPerson =>{
              setPersons(persons.concat(returnedPerson))
              setAlertMessage({message:`User ${returnedPerson.name} has been added`,type:'alert'})
              setTimeout(() => {
                setAlertMessage({message:null, type:null})
              }, 5000)
              setNewName('')
              setNewPhone('')
            })
            .catch(error =>{
              //I didn't add reload component 
              console.log(`Errore ${error}`)
              setAlertMessage({message:`User ${newPerson.name} has already been added to the server.`,type:'error'})
              setTimeout(() => {
                setAlertMessage({message:null, type:null})
              }, 5000)
            })
          }   
        })
              
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