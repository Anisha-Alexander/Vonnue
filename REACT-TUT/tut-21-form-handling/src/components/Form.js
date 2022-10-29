import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props)

        this.state={
            username:'',
            address:'',
            topic:''
        }
    }
    handleUsernameChange = event => {
        this.setState({
            username:event.target.value
            

        })
    }
    handleAddressChange = event => {
        this.setState({
            address:event.target.value
        })
    }
    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    // const {username,address, topic =this.state
    return (
     <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username :  </label>
            <input 
            type='text' 
            value={this.state.username}
            onChange={this.handleUsernameChange}
            />
        </div>
        <div>
            <label>Address :  </label>
            <textarea 
            value={this.state.address} 
            onChange={this.handleAddressChange}>        
            </textarea>
        </div>
        <div>
            <label>Topic : </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value='react'>REACT</option>
                <option value='angular'>ANGULAR</option>
                <option value='vue'>VUE</option>
            </select>
        </div>
        <button>Submit</button>
     </form>
    )
  }
}

export default Form