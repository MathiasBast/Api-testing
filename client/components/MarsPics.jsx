import React from 'react'
import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/v1/mars'

const imgStyle = {
  width: '400px',
  marginTop: '20px',
  marginBottom: '20px'
}

let viewData = {}

console.log("outside");


class MarsPics extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sol: 1000,
      camera: "RHAZ",
      load: false,
      pics: ''
    }
  }

  loader () {
    console.log(viewData)
    var { sol, camera } = viewData
    request.get(apiUrl + '/' + sol + '/' + camera)
    .then(res => {
      this.setState({
        pics: res.body.pics,
        load: true
      })
      // this.setState({
      //   sol: this.state.pics[0].sol
      // })
      console.log(res.body)
    })
  }

  componentDidMount () {
    this.loader()
  }

  handleCameraChange = event => {  
    this.setState({
      camera: event.target.value
    })
  }

  handleSolChange = event => {
    this.setState({
      sol: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { sol, camera } = this.state
    viewData = {
      sol: sol,
      camera: camera
    }
    this.setState({
      load: false
    })
    this.loader()
  }

  render () {
    return (
      <>
        {this.state.load
          ? <div>
            <form>
              <label>
            Pick a camera:
                <select name='camera' value={this.state.camera} onChange={this.handleCameraChange}>
                  <option value='all'>All</option>
                  <option value='FHAZ'>Front Hazard Avoidance Camera</option>
                  <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                  <option value="MAST">Mast Camera</option>
                  <option value="CHEMCAM">Chemistry and Camera Complex</option>
                  <option value="MAHLI">Mars Hand Lens Imager</option>
                  <option value="MARDI">Mars Descent Imager</option>
                  <option value="NAVCAM">Navigation Camera</option>
                </select>
              </label>
              <label>Sol</label><input min={0} name='sol' type='number' 
              value={this.state.sol} 
              onChange={this.handleSolChange} 
              placeholder={0} 
              />
              <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>

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
          </div>

          : <div>Loading...</div>
        }
      </>
    )
  }
}

export default MarsPics
