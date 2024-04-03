const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('Hello World')
})

app.get('/twitter', (req,res)=>{
    res.send('dhruvsingha')
})
app.get('/login',(req,res) => {
    res.send('<h1> pleasse login at chai aur code</h1>') //returns the data in query
})

app.get('/chai',(req,res)=>{
  res.send("<h2> Chai aur code </h2")  
})

app.listen(port, ()=> {
    console.log(`Example app listening port ${port}`)
})