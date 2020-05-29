import React from 'react'
import PersonDetails from './PersonDetails'
import PersonService from '../services/persons'

const PersonsList = ({persons,setPersons,setAlertMessage}) => {

  const handleButtonDelete= (n) =>{
    if( window.confirm(`Do you realy want to delete user ${n.name}?`)){
      PersonService
      .deletePerson(n.id)
      .then(response => {
        console.log('deleted user')
        setPersons(persons.filter(p=>p.id!==n.id))
        setAlertMessage({message:`User ${n.name} has been deleted`,type:'alert'})
        setTimeout(() => {
          setAlertMessage({message:null, type:null})
        }, 5000)
      })
      .catch(error => {
        console.log(`Errore ${error}`)
        setAlertMessage({message:`User ${n.name} has already been deleted`,type:'error'})
        setTimeout(() => {
          setAlertMessage({message:null, type:null})
        }, 5000)
      })
      
    }
  }
    return (
      persons.map(n =>
      <div key={n.name}> 
      <PersonDetails person={n}/>
      <button value={n.id} onClick={()=>handleButtonDelete(n)}>Delete</button>
      </div>)
      
    )
  }
  
export default PersonsList