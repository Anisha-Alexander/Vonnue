import React from 'react'
import { ToDo } from './Model'
import SingleToDo from './SingleToDo'
import './ToDoList.css'

interface Props{
  todos:ToDo[]
  setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList : React.FC <Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
      {
        todos.map(todo =>(
         <SingleToDo todo={todo}  key={todo.id} todos={todos} setTodos={setTodos}/>
        ))
      }
    </div>
  )
}

export default ToDoList