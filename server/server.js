const path = require('path')
const express = require('express')

const marsRoutes = require('./routes/MarsPic')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/mars', marsRoutes)

module.exports = server
