import React from 'react'
import request from 'superagent'

const url = 'http://shibe.online/api/shibes' // '?count=5&urls=true&httpsUrls=true'

class Shibes extends React.Component {
  state = {
    imgUrls: []
  }

  componentDidMount () {
    request.get(url)
      .query({ count: 5, urls: true, httpsUrls: true })
      .then(res => {
        this.setState({
          imgUrls: res.body
        })
      })
  }

  render () {
    return (
      <>
        <h2>Look at dem shibes</h2>
        <div className='shibeImages'>
          {this.state.imgUrls.map(imgUrl => {
            return <img key={imgUrl} src={imgUrl} />
          })}
        </div>
      </>
    )
  }
}

export default Shibes
