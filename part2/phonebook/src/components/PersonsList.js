import React from 'react'
import PersonDetails from './PersonDetails'
import PersonService from '../services/persons'

const PersonsList = ({persons,setPersons}) => {

  const handleButtonDelete= (n) =>{
    if( window.confirm(`Do you realy want to delete user ${n.name}?`)){
      PersonService
      .deletePerson(n.id)
      .then(response => {
        console.log('deleted user')
        setPersons(persons.filter(p=>p.id!==n.id))
      })
      .catch(error => {
        console.log(`Errore ${error}`)
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