import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {actions,originals,romance} from './urls.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Orginal"/>
      <RowPost url={actions}title="Action" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
    </div>
  );
}

export default App;
