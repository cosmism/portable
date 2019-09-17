const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes/index.js')

app.use('/',router)
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({    
  extended: true
}))

module.exports = {
    path: '/api',
    handler: app
  }