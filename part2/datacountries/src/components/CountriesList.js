import React from 'react'
import InfoPanel from './InfoPanel'
import Country from './Country'

const CountriesList = ({countries,showInfo}) =>{
    if(countries.length > 10){
      return(
        <div>Too many countries, filter them</div>
        )
    }else if(countries.length === 1){
      return(
        <InfoPanel country={countries[0]}/>
      )
    }else{
      return(
        <div>
          {countries.map(country =>
          <div key={country.name}>
            <Country  country={country}/>
            <button value={country.name} onClick={showInfo}>Show</button>
          </div>
            )
          }
        </div>
      )
    }
  }
  
export default CountriesList