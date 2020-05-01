const express = require('express')
const router = express.Router()

const request = require('superagent')
const apiCuriosity = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?'
const apiOpportunity = 'https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos?'
const apiSpirit = 'https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/photos?'
const apiKey = '60Db4uxfwdIj8Jjsp5gM3q1cUy9PVFmTfYH2uRmD'
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=5&camera=FHAZ&api_key=60Db4uxfwdIj8Jjsp5gM3q1cUy9PVFmTfYH2uRmD
router.get('/:sol/:camera/:rover', (req, res) => {
  const { sol, camera, rover } = req.params
  if (rover === 'Curiosity') {
    if (camera !== 'ALL') {
      request.get(apiCuriosity)
        .query({ sol: sol })
        .query({ camera: camera })
        .query({ api_key: apiKey })
        .then(apiRes => {
          let viewData = {
            pics: []
          }
          apiRes.body.photos.map((photo, i) => {
            const { id, sol, img_src, earth_date, rover, camera } = photo
            const data = {
              id: id,
              sol: sol,
              imgSrc: img_src,
              earthDate: earth_date,
              roverName: rover.name,
              maxSol: rover.max_sol,
              name: camera.full_name
            }
            viewData.pics.push(data)
          })
          res.json(viewData)
        })
    }
    if (camera === 'ALL') {
      request.get(apiCuriosity)
        .query({ sol: sol })
        .query({ api_key: apiKey })
        .then(apiRes => {
          let viewData = {
            pics: []
          }
          apiRes.body.photos.map((photo, i) => {
            const { id, sol, img_src, earth_date, rover, camera } = photo
            const data = {
              id: id,
              sol: sol,
              imgSrc: img_src,
              earthDate: earth_date,
              roverName: rover.name,
              maxSol: rover.max_sol,
              name: camera.full_name
            }
            viewData.pics.push(data)
          })
          res.json(viewData)
        })
    }
  } else if (rover === 'Opportunity') {
    if (camera !== 'ALL') {
      request.get(apiOpportunity)
        .query({ sol: sol })
        .query({ camera: camera })
        .query({ api_key: apiKey })
        .then(apiRes => {
          let viewData = {
            pics: []
          }
          apiRes.body.photos.map((photo, i) => {
            const { id, sol, img_src, earth_date, rover, camera } = photo
            const data = {
              id: id,
              sol: sol,
              imgSrc: img_src,
              earthDate: earth_date,
              roverName: rover.name,
              maxSol: rover.max_sol,
              name: camera.full_name
            }
            viewData.pics.push(data)
          })
          res.json(viewData)
        })
    }
    if (camera === 'ALL') {
      request.get(apiOpportunity)
        .query({ sol: sol })
        .query({ api_key: apiKey })
        .then(apiRes => {
          let viewData = {
            pics: []
          }
          apiRes.body.photos.map((photo, i) => {
            const { id, sol, img_src, earth_date, rover, camera } = photo
            const data = {
              id: id,
              sol: sol,
              imgSrc: img_src,
              earthDate: earth_date,
              roverName: rover.name,
              maxSol: rover.max_sol,
              name: camera.full_name
            }
            viewData.pics.push(data)
          })
          res.json(viewData)
        })
    }
  } else if (rover === 'Spirit') {
    if (camera !== 'ALL') {
      request.get(apiSpirit)
        .query({ sol: sol })
        .query({ camera: camera })
        .query({ api_key: apiKey })
        .then(apiRes => {
          let viewData = {
            pics: []
          }
          apiRes.body.photos.map((photo, i) => {
            const { id, sol, img_src, earth_date, rover, camera } = photo
            const data = {
              id: id,
              sol: sol,
              imgSrc: img_src,
              earthDate: earth_date,
              roverName: rover.name,
              maxSol: rover.max_sol,
              name: camera.full_name
            }
            viewData.pics.push(data)
          })
          res.json(viewData)
        })
    }
    if (camera === 'ALL') {
      request.get(apiSpirit)
        .query({ sol: sol })
        .query({ api_key: apiKey })
        .then(apiRes => {
          let viewData = {
            pics: []
          }
          apiRes.body.photos.map((photo, i) => {
            const { id, sol, img_src, earth_date, rover, camera } = photo
            const data = {
              id: id,
              sol: sol,
              imgSrc: img_src,
              earthDate: earth_date,
              roverName: rover.name,
              maxSol: rover.max_sol,
              name: camera.full_name
            }
            viewData.pics.push(data)
          })
          res.json(viewData)
        })
    }
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
