import React from 'react'

function FunctionClick(){

    function clickHandler(){
        console.log('click handled well!')
    }
    return(
        <div>
            <button onClick={clickHandler}>FunctionClick</button>
        </div>
    )
}

export default FunctionClick;

