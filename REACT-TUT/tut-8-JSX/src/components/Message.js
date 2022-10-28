import React, { Component } from 'react'

export class Message extends Component{
    constructor(){
        super()
        this.state={
            message:' Welcome Alexander'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render(){
        return (
        <div>
            <h1> {this.state.name} {this.state.message} </h1>
            <button onClick={() => this.changeMessage()}>Previous</button>
            <button>Next</button>
        </div>
        )
    }
}
// class component
// export default Welcome;
