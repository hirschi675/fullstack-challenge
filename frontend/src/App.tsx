import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [activeId, setActiveId] = useState("Account 1")
  const [rotate, rotateState] = useState(true)
  const rotateArrow = () => {
    rotateState(!rotate)
  }

  const organizations: Promise<void> =
  fetch('http://localhost:3000/organizations')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.rows);
    })
    .catch(error => console.error('Error fetching organizations:', error));
  console.log(organizations)

  const accounts: Promise<void> =
  fetch('http://localhost:3000/accounts')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.rows);
    })
    .catch(error => console.error('Error fetching accounts:', error));
  console.log(accounts)

  const deals: Promise<void> =
  fetch('http://localhost:3000/deals')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.rows);
    })
    .catch(error => console.error('Error fetching deals:', error));
  console.log(deals)


  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-main">
        <div className="App-main-wrapper">
          <Sidebar rotate={rotate} activeId={activeId} rotateArrow={rotateArrow} organization={"Organization"} setActiveId={setActiveId} />
          <Dashboard rotate={rotate} activeId={activeId}  />
        </div>
      </div>
    </div>
  );
}

export default App;
