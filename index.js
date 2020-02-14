const express = require('express')
const app = express()

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017/sound'
const path = require('path')
const bodyParser =  require('body-parser')


app.use(express.json())
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded())

app.get('/', (req,res) =>{
    res.sendFile(pth.join(__dirname+'index.html'))
})

app.listen(80,'192.168.1.102', () => console.log('Server Started'))
