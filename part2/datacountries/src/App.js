import React,{ useState, useEffect } from 'react';

import CountriesList from './components/CountriesList'
import axios from 'axios'




const App = () => {
  const [countries,setCountries] = useState([])

  const [countryFilter,setFilter] = useState('')


  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const showInfo = event => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })

  },[])

  
  /*
  
  */
    
    
  return (
    <div className="App">
      <div>
        find countries <input value={countryFilter} onChange={handleFilterChange}/>
      </div>
      <CountriesList filter={countryFilter} countries={countries} showInfo={showInfo}/>
      <div></div>
    </div>
  );
}

export default App;
