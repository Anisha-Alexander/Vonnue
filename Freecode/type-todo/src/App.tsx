import React from 'react';
import './App.css';


let name: string
name ="Piyush"
let age:number | string
age= 'tweety'
age=4
let isStudent:boolean
let hobbies: string[]
let role:[number, string]
// hobbies=['helo','hellli']

// type Person={
//   name:string
//   age:number
// }
interface person{
  name:string
  age:number
}
// let person: Person = {
//   name:"Piyush",
//   age:22
// }
// let per: Person ={
//   name:"honey",
//   age:21
// }
// let lotsOfPeople :Person[]


function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
