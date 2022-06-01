const cors = require('cors')
const { append } = require('express/lib/response')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

//Set up Database through MongoDB
MongoClient.connect('mongodb+srv://Houli:Be%40n8678@cluster0.skyx0.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Time is yours and yours alone')
        const db = client.db('Expatriate')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(cors())
        app.listen(3000,() => {
            console.log('The Servant is always listening...')
        })
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        })
        app.post('/quotes', (req,res) => {
            console.log(req.body)
        })
})
.catch(console.error)





