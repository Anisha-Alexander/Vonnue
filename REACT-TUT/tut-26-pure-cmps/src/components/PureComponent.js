import React, { Component } from 'react'

export class PureComponent extends Component {
  render() {
    return (
      <div>PureComponent  {this.props.name}</div>
    )
  }
}

export default PureComponent