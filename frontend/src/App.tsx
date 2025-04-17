import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const organization = "Organization"
  const db =
    {
      organization: [{id: 1, name: "Lakers"}, {id: 2, name: "BYU"}],
      accounts: [{id: 1, name: "Coca Cola"}, {id: 2, name: "Nike"}, {id: 3, name: "McDonalds", org_id: 2}, {id: 4, name: "Walmart", org_id: 2}],
      deals: [{id: 1, name: "Lakers n Coca Cola Deal", start_date: "04/12/2025", end_date: "04/12/2026", value: 200, status: true, account_id: 1, org_id: 1}, {id: 2, name: "Lakers n Nike", start_date: "04/13/2025", end_date: "04/13/2026", value: 600, status: true, account_id: 1, org_id: 1}, {id: 3, name: "Lakers Coca Cola", start_date: "04/25/2025", end_date: "06/12/2025", value: 100, status: true, account_id: 2, org_id: 2}]
    }
  const [activeId, setActiveId] = useState("Account 1")
  const [rotate, rotateState] = useState(true)
  const rotateArrow = () => {
    rotateState(!rotate)
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-main">
        <div className="App-main-wrapper">
          <Sidebar rotate={rotate} activeId={activeId} rotateArrow={rotateArrow} organization={organization} setActiveId={setActiveId} db={db}/>
          <Dashboard rotate={rotate} activeId={activeId} db={db}   />
        </div>
      </div>
    </div>
  );
}

export default App;
