import { type } from '@testing-library/user-event/dist/type'
import React, { useRef, useState , useEffect} from 'react'
import { ToDo } from './Model'
import { AiFillEdit ,AiFillDelete} from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import ToDoList from './ToDoList'

type Props ={
    todo :ToDo
    todos:ToDo[]
    setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleToDo  = ({todo,todos,setTodos} :Props) => {
    const [edit, setedit] = useState<Boolean>(false)
    const [editTodo, seteditTodo] = useState<string>(todo.todo)
    const handleDone = (id:number) =>{
        setTodos(
            todos.map((todo) =>
            todo.id === id ? {...todo,isDone: !todo.isDone}:todo)
        )
    }
    const handleDelete = (id:number) =>{
        setTodos(todos.filter((todo) => todo.id ! == id))
    }
    const handleEdit=(e:React.FormEvent, id:number) =>{
        e.preventDefault()

        setTodos(todos.map((todo) =>(
            todo.id === id? {...todo,todo:editTodo}: todo
        )))
        setedit(false)
    }
   
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect (() =>{
        inputRef.current?.focus()
    },[edit])
  return (
    <form className='todos-single' onSubmit={(e) =>handleEdit(e,todo.id)}> 
        {
            edit ? (
                <input ref={inputRef} value={editTodo} onChange={(e) => seteditTodo(e.target.value)} className = "todos-single-text"/>
            ):(
                todo.isDone?(
                    <s className='todos-single-text'>{todo.todo}</s>
                ):(
                    <span className='todos-single-text'>{todo.todo}</span>
                )
            )
        }
        
        
        <div>
        <span className="icon" onClick={ () =>{
                if(!edit && !todo.isDone){
                    setedit(!edit)
                }
            }
        }>
            <AiFillEdit/>
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete/>
        </span>
        <span className="icon" onClick={() =>handleDone(todo.id)}>
            <MdDone/>
        </span>
    </div>
    </form>
    
  )
}

export default SingleToDo