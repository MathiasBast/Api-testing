const express = require('express')
const router = express.Router()

const request = require('superagent')
const api = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?'
const apiKey = '60Db4uxfwdIj8Jjsp5gM3q1cUy9PVFmTfYH2uRmD'
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=5&camera=FHAZ&api_key=60Db4uxfwdIj8Jjsp5gM3q1cUy9PVFmTfYH2uRmD
router.get('/:sol/:camera', (req, res) => {
  const { sol, camera } = req.params
  if(camera !== 'ALL'){
    request.get(api)
      .query({ sol: sol })
      .query({ camera: camera })
      .query({ api_key: apiKey })
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
            roverName: rover.name,
            maxSol: rover.max_sol
          }
          viewData.pics.push(data)
        })
        res.json(viewData)
      })
  }
  if(camera === 'ALL') {
    request.get(api)
      .query({ sol: sol })
      .query({ api_key: apiKey })
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
            roverName: rover.name,
            maxSol: rover.max_sol
          }
          viewData.pics.push(data)
        })
        res.json(viewData)
      })
  }
})

// 

module.exports = router
