import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const organization = "Organization 1"
  const [activeId, setActiveId] = useState("Dashboard")
  const [rotate, rotateState] = useState(true)
  const rotateArrow = () => {
    rotateState(!rotate)
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-main">
        <div className="App-main-wrapper">
          <Sidebar rotate={rotate} activeId={activeId} rotateArrow={rotateArrow} organization={organization} setActiveId={setActiveId}/>
          <Dashboard rotate={rotate} activeId={activeId}   />
        </div>
      </div>
    </div>
  );
}

export default App;
