import React, { Component } from 'react'

export class UserGreetings extends Component {

  constructor(props){
    super(props)

    this.state={
        isLoggedIn : true
    }
  }
  
  render() {
     
    return this.state.isLoggedIn && <div>Welocme Short circuit operator</div>


    // --------------------------------------------------------------------------------3
    // return this.state.isLoggedIn ?(
    // <div>Hrlloo mowonnnss</div>
    // ):(
    // <div>else</div>)
    

    // ------------------------------------------------------------------------------------2
    // let message
    // if (this.state.isLoggedIn){
    //     message= <div>Welcome monusee</div>
            
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    // }
    // return(message) 
         
    //  ----------------------------------------------------------------------------------1
    // if (this.state.isLoggedIn){

    //     return(
    //         <div>Welcome monusee</div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Vishwas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreetings