import React from 'react';
import './Page.css';


function Dashboard(props:any) {
  return (
    <div className={`page-wrapper ${props.activeId === "Dashboard"? 'active': 'inactive'} `}>
      <div className="dash-wrapper">
        Test
      </div>
    </div>
  );
}

export default Dashboard;
