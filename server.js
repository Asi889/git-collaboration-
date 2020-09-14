const express = require('express');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const api = require("./server/routes/api")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/',api)


app.get('/message', (req,res)=>{
    res.send(`this is my secret message`)
})


const PORT = 3100
app.listen(process.env.PORT || PORT ,()=>{
    console.log(`Server is running on port ${PORT}`);
})