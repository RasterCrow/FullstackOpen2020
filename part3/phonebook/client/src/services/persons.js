import axios from 'axios'
const baseUrl = '/api/persons'


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
const updatePersonNumber = (id,personWithNewPhone) => {
    const request = axios.put(`${baseUrl}/${id}`,personWithNewPhone)
    return request.then(response => response.data)
   //return request.then(response => response.data)
}

export default { 
    addPerson,
    getPersonsList,
    deletePerson,
    updatePersonNumber
  }