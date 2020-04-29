import React from 'react'



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
          

          {this.props.load
            ? <div>
              <p>Max Sol is: {this.state.pics[0].maxSol}</p>
              {this.state.pics.map(pic => {
                return (
                  <div key={pic.id} className='pics-class' >
                    <img src={pic.imgSrc} style={imgStyle} />
                    <div>Rover Name: {pic.roverName}</div>
                    <div>Sol: {pic.sol}</div>
                    <div>Earth Date: {pic.earthDate}</div>
                  </div>
                )
              })
              }
            </div>

            : <div>{this.state.state}</div>
          }
        </div>
      </>
    )
  }
}

export default MarsPics
