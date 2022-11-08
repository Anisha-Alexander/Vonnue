import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import data from './components/data.json'
import Main from './components/Main/Main';
import Section from './components/Section/Section';
import Aside from './components/Aside/Aside';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';


// export interface AppData {
//   header:string;
// }

const App : React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Aside/>
      <Section/>
      <Article/>      
      <Footer/>
    </div>
    
    );
  }

export default App;
