const express = require('express')
const router = express.Router()

const request = require('superagent')
const apiKey = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=60Db4uxfwdIj8Jjsp5gM3q1cUy9PVFmTfYH2uRmD'

router.get('/', (req, res) => {
  request.get(apiKey)
  .then(apiRes => {
    console.log(apiRes.body.photos[0].id)
  })
})

module.exports = router
