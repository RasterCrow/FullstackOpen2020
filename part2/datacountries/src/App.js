import React,{ useState, useEffect } from 'react';

import axios from 'axios'

const Countrie = ({countrie,last}) =>{
  if(last){
    return(
      <div>
      <h2>{countrie.name}</h2>
      <p>capital {countrie.capital}</p>
      <p>population {countrie.population}</p>
      <h3>languages</h3>
      <ul>
        {countrie.languages.map(lan =><li key={lan.name}>{lan.name}</li>)}
      </ul>
      <img src={countrie.flag} alt="flag of country" width="80"></img>
      </div>
    )
  }else{
    return(
      <div>{countrie.name}</div>
    )
  }
  
}

const CountriesList = ({countries}) =>{
  if(countries.length > 10){
    return(
      <div>Too many countries, filter them</div>
      )
  }else if(countries.length === 1){
    return(
      <div>
        <Countrie key={countries[0].name} countrie={countries[0]} last={true}/>
      </div>
      )
  }else{
    return(
      <div>
        {countries.map(countrie => <Countrie key={countrie.name} countrie={countrie}/>)}
      </div>
      )
  }
}

const App = () => {
  const [countries,setCountries] = useState([])

  const [countrieFilter,setFilter] = useState({
    active: false, filter:''
  })

  console.log('Filter Active :',countrieFilter.active)
  const countriesToLoad =  countrieFilter.active
    ? countries.filter((element) => {
        return element.name.toLowerCase().includes(countrieFilter.filter.toLowerCase())
      })
    : countries

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter({
      active : true, filter : event.target.value
    })
  }

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })

  },[])

  
  
  return (
    <div className="App">
      <div>
        find countries <input onChange={handleFilterChange}/>
      </div>
      <div>
      <CountriesList countries={countriesToLoad}/>
      </div>
    </div>
  );
}

export default App;
