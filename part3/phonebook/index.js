const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

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
    res.json(persons_list)
})

app.post("/api/persons",(req,res)=>{
    let data = req.body
    let newPerson = {
        "name": data.name,
        "number": data.number,
        "id": Math.random()
    }
    if (newPerson.name =="" || newPerson.number =="" ){
        res.status(400).json({ error: 'name and number are required' })
    }else if(persons_list.find(person => person.name === newPerson.name)!= undefined){
        res.status(400).json({ error: 'there is already a person with this name' })
    }else{
        persons_list = persons_list.concat(newPerson)
        console.log("Persons added")
        res.json({ error: 'Person added succesfully' })
    }
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