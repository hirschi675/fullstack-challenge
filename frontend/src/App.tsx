import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

type Deal = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  value: number;
  status: boolean;
  account_id: number;
  org_id: number;
};

type Organization = {
  id: number;
  name: string;
};

type Account = {
  id: number;
  name: string;
};

function App() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [deals, setDeals] = useState<Deal[]>([]);

  const [activeId, setActiveId] = useState(organizations[0]?.name || '');
  const [rotate, rotateState] = useState(true)
  const rotateArrow = () => {
    rotateState(!rotate)

  }

  useEffect(() => {
    async function loadData() {
      try {
        const orgRes = await fetch('http://localhost:3000/organizations');
        if (!orgRes.ok) throw new Error('Org fetch failed');
        const orgData = await orgRes.json();
        setOrganizations(orgData.rows);

        const accRes = await fetch('http://localhost:3000/accounts');
        if (!accRes.ok) throw new Error('Account fetch failed');
        const accData = await accRes.json();
        setAccounts(accData.rows);

        const dealRes = await fetch('http://localhost:3000/deals');
        if (!dealRes.ok) throw new Error('Deal fetch failed');
        const dealData = await dealRes.json();
        setDeals(dealData.rows);
      } catch (error) {
        console.error('Error fetching data. App will load with no data.', error);
      }
    }

    loadData();
  }, []);


  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-main">
        <div className="App-main-wrapper">
          <Sidebar rotate={rotate} activeId={activeId} rotateArrow={rotateArrow} organizations={organizations} setActiveId={setActiveId}/>
          <Dashboard rotate={rotate} activeId={activeId} organizations={organizations} deals={deals} accounts={accounts}   />
        </div>
      </div>
    </div>
  );
}

export default App;
