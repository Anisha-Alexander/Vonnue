import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinds from './components/EventBind';
function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick/>
      <EventBinds/>
    </div>
  );
}

export default App;

