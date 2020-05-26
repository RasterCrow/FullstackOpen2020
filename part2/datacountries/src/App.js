import React,{ useState, useEffect } from 'react';

import CountriesList from './components/CountriesList'
import axios from 'axios'


const App = () => {
  const [countries,setCountries] = useState([])

  const [countryFilter,setFilter] = useState({
    active: false, filter:''
  })

  console.log('Filter Active :',countryFilter.active)
  const countriesToLoad =  countryFilter.active
    ? countries.filter((element) => {
        return element.name.toLowerCase().includes(countryFilter.filter.toLowerCase())
      })
    : countries

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter({
      active : true, filter : event.target.value
    })
  }

  const showInfo = (event) => {
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
      <CountriesList countries={countriesToLoad} showInfo={showInfo}/>
    </div>
  );
}

export default App;
