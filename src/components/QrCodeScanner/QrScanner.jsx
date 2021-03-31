import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class QrScanner extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ height: 240,
            width: 320, }}
        />
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default QrScanner;