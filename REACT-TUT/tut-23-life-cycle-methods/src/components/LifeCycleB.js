import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:'Vishwas'
        }
        console.log('l const')
    }
    static getDerivedStateFromProps(props,state){
        console.log('l derived')
        return null
    }
    componentDidMount(){
        console.log('did mou')
    }
  render() {
    console.log('render')
    return (
      <div>LifeCycle B</div>
    )
  }
}

export default LifeCycleB