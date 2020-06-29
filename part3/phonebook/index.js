const express = require('express')
const app = express()
const db = require("./db.json")

app.get("/",(req,res) =>{
    console.log("new user")
    res.send("HELLO")
})


app.get("/api/persons",(req,res)=>{
    console.log("Persons request")
    res.json(db)
})

app.get("/info",(req,res)=>{
    let nPeople = db["persons"].length
    let date = new Date();
    let message = `Phonebook has info on ${nPeople} people. \n ${date}`
    res.send(message)
})

const PORT = 3001
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})