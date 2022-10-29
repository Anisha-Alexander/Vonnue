import React from 'react'
import Person from './Person'

function NameList() {
    const names= ['Honey','Bear','Alexander','Masha','Reena']
    const nameLists = names.map(nme => <h2 key={nme}>{nme}</h2>)
  return (
    <div>
        {nameLists}
    </div>
  )
}

// // export default NameList

// function NameList() {
//     const persons=[
//         {
//             id:1,
//             name:'Alexander',
//             age:'62'
//         },
//         {
//             id:2,
//             name:'Reena',
//             age:'50'
//         },
//         {
//             id:3,
//             name:'Bear',
//             age:'23'
//         }            
//     ]
//     const personList = persons.map(person => <Person key={person.id} person={person}/> )
//     return (
//     <div>{personList}</div>)
// }

export default NameList