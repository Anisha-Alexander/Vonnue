import React,{useState,useEffect} from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './components/Model';
import ToDoList from './components/ToDoList';


     
const App : React.FC= () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<ToDo[]>([])

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
    }
  }
  console.log(todos) 
  return (
    <div className="App"> 
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <ToDoList todos={todos} setTodos={setTodos}/>
      {/* {todos.map((t)=>(
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
}

export default App;
