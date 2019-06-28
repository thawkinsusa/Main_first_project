const express = require('express')
require('dotenv').config({ path: __dirname + '/../env' })
const app = express()
const mainCtrl = require('./controller/mainController')

app.use(express.json())

app.get('/api/char', mainCtrl.characters)
app.get('/api/charactersTwo', mainCtrl.charactersTwo)
// app.put('/app/characters'), mainCtrl.characters
app.put('/api/characters/:id', mainCtrl.updateNameTwo)
app.delete('/api/charactersTwo/:id', mainCtrl.deleteHero)





const {
    SERVER_PORT
} = process.env;

app.listen(3001, () => {
    console.log(`Server is running on ${3001}`);
})