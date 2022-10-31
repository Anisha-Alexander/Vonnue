import React, {useState, useEffect} from 'react' ;

function Increment() {
    const [count,setCount] = useState(0)    
    const [color,setColor] = useState('white')

    useEffect(() =>{
        console.log('inside use effect' + count + color);
        return() =>{            
            console.log('clean' + count + color)            
        }
    },[count,color]);
  return (
    <div>   
        <div>
            <button onClick={ () =>{setCount(count+1 )}} >Increment</button>
            <label>{count}</label>
            <button onClick={ () =>{setCount((state) =>{ return state - 1})} }>Decrement</button>
        </div>
        <div>
            <button onClick={() =>{
                setColor('green');
            }}>Green</button>
            <button onClick={() =>{
                setColor('yellow');
            }}>Yellow</button>
        </div>
    </div>
  )
}

export default Increment