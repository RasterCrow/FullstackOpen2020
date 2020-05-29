import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


//add person to db
const addPerson = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const getPersonsList = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
     const request = axios.delete(`${baseUrl}/${id}`)
     return request
    //return request.then(response => response.data)
}

export default { 
    addPerson,
    getPersonsList,
    deletePerson
  }