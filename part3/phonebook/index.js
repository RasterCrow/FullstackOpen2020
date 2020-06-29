const express = require('express')
const app = express()

let persons_list = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "alex",
      "phone": "32131231",
      "id": 5
    }
  ]

app.get("/",(req,res) =>{
    console.log("new user")
    res.send("HELLO")
})

app.get("/api/persons",(req,res)=>{
    console.log("Persons request")
    res.json(persons_list)
})

app.get("/api/persons/:id",(req,res)=>{
    let id = Number(req.params.id)
    let person = persons_list.find(person => person.id === id)
    console.log(`Looked for person with id : ${id}`)
    person ? res.json(person) : res.status(404).end()
})

app.delete("/api/persons/:id",(req,res)=>{
    let id = Number(req.params.id)
    persons_list = persons_list.filter(person => person.id != id)
    console.log(`Person with id : ${id} deleted.`)
    res.status(204).end()
})

app.get("/info",(req,res)=>{
    let nPeople = persons_list.length
    let date = new Date();
    let message = `Phonebook has info on ${nPeople} people. \n ${date}`
    res.send(message)
})

const PORT = 3001
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})