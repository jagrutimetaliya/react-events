
import './App.css';
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import ConditioningRenderingComponent from './components/ConditioningRenderingComponent'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>success</h1>
        {/* <FunctionClick/>
        <ClassClick/>
        <EventBind/>
        <ParentComponent/> 
        <ConditioningRenderingComponent/>
        */}
        {/* <NameList/> */}
        <Stylesheet primary={true} />
        <Inline/>
    </div>
  );
}

export default App;
