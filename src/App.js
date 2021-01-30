import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ConditioningRenderingComponent from './components/ConditioningRenderingComponent'

function App() {
  return (
    <div className="App">
        {/* <FunctionClick/>
        <ClassClick/>
        <EventBind/>
        <ParentComponent/> */}
        <ConditioningRenderingComponent/>
    </div>
  );
}

export default App;
