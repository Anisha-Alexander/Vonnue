import React from 'react'
import App from '../App'

//  function Greet(){
//     return <h1> Hello Vishwas</h1>
//  }
export const Greet = (props) =>
{
    const {name, dname, children} =props
    // console.log(props)
    return( 
        <div>
            <h1>Hello {name}  {dname}</h1>
            {children}
        </div>
    )
}

// export default Greet;