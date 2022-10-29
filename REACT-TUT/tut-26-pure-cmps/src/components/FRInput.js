import React from 'react'

// function FRInput() {
//   return (
//     <div>
//         <input type="text"></input>
//     </div>
//   )
// }


const FRInput= React.forwardRef(() =>{
    return(
        <div>
            <input type="text"></input>
        </div>
    )
}
) 
export default FRInput  