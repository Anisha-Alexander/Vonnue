import React, {useState,useEffect} from 'react'

function UseEffects() {
    const [count,setCount] =useState(0)
    const [msg,setMsg] =useState('Initial render')
  return (
    <div>
        <button onClick={() =>{setCount(count+1)}}>Increment</button>
        <p>{count}</p>
    </div>
  )
}

export default UseEffects