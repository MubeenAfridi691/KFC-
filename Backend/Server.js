const express = require('express')
var bodyParser = require('body-parser')


const product = require('./routes/router')
const { createdatabase } = require('./config/Config')
createdatabase()

const app = express()
app.use(express.json());

require('dotenv').config()
const port = process.env.PORT
app.use('/',product)
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  