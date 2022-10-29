import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/>
      <RefsDemo/> */}
      <FocusInput/>
    </div>
  );
}

export default App;
