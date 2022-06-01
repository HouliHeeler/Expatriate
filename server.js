const cors = require('cors')
const { append } = require('express/lib/response')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000,() => {
    console.log('The Servant is always listening...')
})

app.post('/quotes', (req,res) => {
    console.log(req.body)
})