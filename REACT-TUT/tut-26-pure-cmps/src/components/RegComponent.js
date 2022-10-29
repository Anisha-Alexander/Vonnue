import React, { Component } from 'react'

class RegComponent extends Component {
    constructor(props){
        super(props)
        
        this.state ={

        }
    }
  render() {
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegComponent