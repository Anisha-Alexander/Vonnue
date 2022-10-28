import React, { Component } from 'react'

class ClassClick extends Component {
    classClicked(){
        console.log('helllo')
    }
    render() {
    return (
      <div><button onClick={this.classClicked}>classClick</button></div>
    )
  }
}

export default ClassClick;