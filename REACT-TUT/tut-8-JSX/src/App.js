import logo from './logo.svg';
import './App.css';
import {Hello}  from './components/Hello'
import { Greet } from './components/Greet';
import { Welcome } from './components/Welcome';
import { Message } from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Hello/>

      <Greet name="Masha" dname="Bear">and the</Greet>
      <Greet name="Bear" dname="Masha">
        <button>Action</button>
      </Greet>

      <Welcome name="honey" dname="qlb"/>
      <Welcome name="qlb" dname="honey"/>
    
      <Message name="Alexander"/>

      <Counter/>
    </div>
  );
}

export default App;
