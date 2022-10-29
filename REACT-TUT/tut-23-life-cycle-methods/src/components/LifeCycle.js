import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:'Vishwas'
        }
        console.log('la const')
    }
    static getDerivedStateFromProps(props,state){
        console.log('la derived')
        return null
    }
    componentDidMount(){
        console.log('la did mou')
    }
    shouldComponentUpdate(){
        console.log('Life a shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState ){
        console.log('la getsnapshot')
    }
  render() {
    console.log('larender')
    return (
         <div>
            <div>LifeCycle A</div>
            <LifeCycleB/>
        </div>
    )
  }
}

export default LifeCycle