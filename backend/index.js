const express = require('express')
const dotenv = require('dotenv')
const chats = require('./data/data')
const cors = require('cors');

const app = express()
dotenv.config()
app.use(cors())

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/chats', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find(c => c._id === req.params.id)
    res.send(singleChat)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})