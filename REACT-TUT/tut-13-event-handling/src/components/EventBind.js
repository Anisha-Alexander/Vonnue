import React, {Component} from 'react'

class EventBinds extends Component{

    constructor(props){
        super(props)

        this.state ={
            message: 'Hello'
        }
    }

    // clickHandler(){
    //     this.setState({
    //         message:'Welcome'
    //     })
    //     console.log(this)
    // }
clickHandler =() =>{
    this.setState({
        message:'hhhhhhh'
    })
}

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button> */}
                {/* <button onClick={() => this.clickHandler()}>EventBind</button> */}
                <button onClick={this.clickHandler}>EventBind</button>
            </div>
        )
    }
}

export default EventBinds