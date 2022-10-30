import React, {useState, useEffect} from 'react'

function EffectsCounter() {
    const [count, setCount] = useState(0)
    const [ name, setName] = useState('')
    useEffect(() =>{
        console.log('useEffect - updating document title')
    document.title = `  You have clicked${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={ e => setName(e.target.value)}></input>
        <button onClick={() => setCount( count+1)}> Clicked {count} times</button>
    </div>
  )
}

export default EffectsCounter