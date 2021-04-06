import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class QrScanner extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      result: 'No result'
    }
}
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
      this.props.setQrRespunse(data);
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
          style={{ 
            height: 240,
            width: 240, 
            margin: '0 auto 90px auto' }}
        />
      </div>
    )
  }
}
export default QrScanner;