import React, {useState} from 'react'

function ThreeHookCounter() {
    const [name, setName] = useState({firstName:'',lastName:''})
  return (
    <div>
        <input type="text" 
        value={name.firstName} 
        onChange={ e => setName({ ...name, firstName:e.target.value})}/>

        <input type="text"
        value={name.lastName}  
        onChange={e => setName ({ ...name, lastName:e.target.value})} />

        <h2 >Hello  {name.firstName} {name.lastName}</h2>
        <p>{JSON.stringify (name)}</p>
    </div>
  )
}

export default ThreeHookCounter