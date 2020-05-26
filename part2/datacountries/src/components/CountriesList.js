import React from 'react'
import InfoPanel from './InfoPanel'

const CountriesList = ({countries,showInfo,filter}) =>{
    let countriesToLoad =0
    if(filter !== ''){
      countriesToLoad = countries.filter((element) =>
          element.name.toUpperCase().includes(filter.toUpperCase())
        )
    }else{
      countriesToLoad = countries
    }
    if(countriesToLoad.length > 10){
      return(
        <div>Too many countries, filter them</div>
        )
    }else if(countriesToLoad.length === 1){
      
      return(
        <InfoPanel country={countriesToLoad[0]}/>
      )
    }else{
      return(
        <div>
          {countriesToLoad.map(country =>
          <div key={country.name}>
            <div>
            {country.name}
            </div>
            <button value={country.name} onClick={showInfo}>Show</button>
          </div>
            )
          }
        </div>
      )
    }
  }
  
export default CountriesList