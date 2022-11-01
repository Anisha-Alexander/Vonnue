import './App.css';
import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import EffectsCounter from './components/EffectsCounter';
import FourHookCounter from './components/FourHookCounter';
import HookCounter from './components/HookCounter';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import ThreeHookCounter from './components/ThreeHookCounter';
import TwoHookCounter from './components/TwoHookCounter';
import UseEffects from './components/UseEffects';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/> */}
      {/* <TwoHookCounter/> */}
      {/* <ThreeHookCounter/> */}
      {/* <FourHookCounter/> */}
      {/* <EffectsCounter/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      <IntervalHookCounter/>
      {/* <DataFetching/> */}
      {/* <UseEffects/> */}
    </div>
  );
}

export default App;
