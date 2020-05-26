import React from 'react'

const InfoPanel =({country}) =>{
    return(
      <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(lan =><li key={lan.name}>{lan.name}</li>)}
      </ul>
      <img src={country.flag} alt="flag of country" width="80"></img>
      </div>
    ) 
  }

  export default InfoPanel