import logo from './logo.svg';
import './App.css';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyle.module.css'


function App() {
  return (
    <div className="App">
      <h1 class='error'>Error</h1>
      <h1 class={styles.success}>Success</h1>
      <StyleSheet primary={true}/>
      <Inline/>
    </div>
  );
}

export default App;
