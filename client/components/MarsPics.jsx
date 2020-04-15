import React from 'react'
import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/v1/mars'

const imgStyle = {
  width: '400px',
  marginTop: '20px',
  marginBottom: '20px'
}

class MarsPics extends React.Component {
  state = {
    pics: []
  }

  componentDidMount () {
    request.get(apiUrl)
      .then(res => {
        this.setState({
          pics: res.body.pics
        })
      })
  }

  render () {
    return (
      <>
        {this.state.pics.map(pic => {
          return (
            <div key={pic.id}>
              <img src={pic.imgSrc} style={imgStyle} />
              <div>Rover Name: {pic.roverName}</div>
              <div>Sol: {pic.sol}</div>
              <div>Earth Date: {pic.earthDate}</div>
            </div>
          )
        })
        }
      </>
    )
  }
}

export default MarsPics
