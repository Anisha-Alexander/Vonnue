import React, { Component } from 'react'
// function Welcome (){
//     return(
//         <h1>Class Component</h1>
//     )
// } ---fuunctional component
export class Welcome extends Component{
    render(){
        const {name, dname, children} = this.props
        return (
            <h1>Welcome {name} and {dname}</h1>
        )
    }
}
// class component
// export default Welcome;
