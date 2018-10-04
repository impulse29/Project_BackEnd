var express = require('express')
var cors = require('cors')
var routeSaya = require('./route_mongo')
var bodyParser = require('body-parser')

var app = express()
app.use (cors())
app.use (bodyParser.json())
app.use (routeSaya)

//bikin root

app.get('/', (req, res)=>{
    res.send('<h1>Express <3 MongDB')
})

app.listen(5000, ()=>{
    console.log('Server aktif di port 5000!')
})