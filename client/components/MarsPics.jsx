import React from 'react'
import { connect } from 'react-redux'

const imgStyle = {
  width: '100%',
  height: 'auto',
  marginTop: '20px',
  marginBottom: '20px'
}

class MarsPics extends React.Component {
  render () {
    return (
      <>
        <div className='div-class'>
          <h1>Mars Rover Pix</h1>

          {this.props.errors.message === 'not run' && <p>Select one and submit</p>}
          {!this.props.errors.error
            ? <>
            {!this.props.pending
              ? <div>
                <p>Max Sol is: {this.props.pics.pics[0].maxSol}</p>
                {this.props.pics.pics.map(pic => {
                  return (
                    <div key={pic.id} className='pics-class' >
                      <img src={pic.imgSrc} style={imgStyle} />
                      <div>Rover Name: {pic.roverName}</div>
                      <div>Sol: {pic.sol}</div>
                      <div>Earth Date: {pic.earthDate}</div>
                      <div>Camera: {pic.name} </div>
                    </div>
                  )
                })
                }
              </div>
              
              : <>
              {this.props.errors.message !== 'not run' &&
              <div><p>Loading...</p></div>}

              </>
            }
          </>
            : <div><p>No pictures found</p></div>
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(MarsPics)
