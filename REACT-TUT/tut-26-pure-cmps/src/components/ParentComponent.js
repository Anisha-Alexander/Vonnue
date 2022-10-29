import React, { Component,PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComponent'
import RefsDemo from './RefsDemo'
import RegComponent from './RegComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Honey'
      }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name:'Honey'
            })
        },1000)
    }
    render() {

        console.log(`***********************************Parent Component render ***************************************************************`)
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name}/>
        
        {/* <RegComponent name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>


    )
  }
}

export default ParentComponent