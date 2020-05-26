import React from 'react'
import PersonDetails from './PersonDetails'

const PersonsList = ({persons}) => {
    return (
      persons.map(n => <PersonDetails key={n.name} person={n}/>)
    )
  }
  
export default PersonsList