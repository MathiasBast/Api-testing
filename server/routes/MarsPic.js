const express = require('express')
const router = express.Router()

const request = require('superagent')
const apiKey = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1300&camera=fhaz&api_key=60Db4uxfwdIj8Jjsp5gM3q1cUy9PVFmTfYH2uRmD'

router.get('/', (req, res) => {
  request.get(apiKey)
    .then(apiRes => {
      let viewData = {
        pics: []
      }
      apiRes.body.photos.map((photo, i) => {
        const { id, sol, img_src, earth_date, rover } = photo
        const data = {
          id: id,
          sol: sol,
          imgSrc: img_src,
          earthDate: earth_date,
          roverName: rover.name
        }
        viewData.pics.push(data)
      })
      res.json(viewData)
    })
})

module.exports = router
