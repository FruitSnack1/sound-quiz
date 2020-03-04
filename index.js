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
    res.sendFile(path.join(__dirname+'index.html'))
})

app.post('/', (req, res) =>{
    MongoClient.connect('mongodb://127.0.0.1:27017/sound', async (err,client) =>{
        if (err) return console.log('Unable to connect to the Server', err)
        const db = client.db('sound')
        const result = await db.collection('results').insertOne(req.body)
        console.log(result.ops);
        res.sendStatus(200)
    })
})

app.listen(80, '192.168.0.54', () => console.log('Server Started'))
