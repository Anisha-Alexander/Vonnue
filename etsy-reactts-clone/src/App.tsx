import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import data from './components/data.json'
import Main from './components/Main/Main';


// export interface AppData {
//   header:string;
// }

const App : React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main/>
      
    </div>
    
    );
  }

export default App;
