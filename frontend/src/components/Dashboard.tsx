import './Page.css';
import {useState} from 'react';
import Deal from "./Deal"

function Dashboard(props:any) {
  const [activeTab, setActiveTab] = useState("Deal 1")
  const showDeal = (id:string) => {
    console.log("Deal " + id);
  }

  return (
      <div className={`page-wrapper ${props.activeId ? 'active' : 'inactive'} ${props.rotate == true ? 'shrink-dash' : 'grow-dash'} `}>
        <h1 className="no-margin" >{props.activeId}</h1>
        <h3 className="no-margin" >Deals</h3>
        <div className="dash-wrapper">
          <div className="deals-wrapper">
          <div className="tabbed">
              <ul>
                <li onClick={() => setActiveTab("Deal 3")} tabIndex={0} className={`page-wrapper ${activeTab == "Deal 3" ? 'active' : ''} `}>Deal 3</li>
                <li onClick={() => setActiveTab("Deal 2")} tabIndex={0} className={`page-wrapper ${activeTab == "Deal 2" ? 'active' : ''} `}>Deal 2</li>
                <li onClick={() => setActiveTab("Deal 1")} className={`page-wrapper ${activeTab == "Deal 1" ? 'active' : ''} `}>Deal 1</li>
              </ul>
            </div>
            <div className="deals-tabs-wrapper">
              <div className="top-deals-tab-wrapper">
                <div>
                  <h4 style={{margin: "0px"}}>{activeTab}</h4>
                  <div>$30,000 | $40,000</div>
                </div>
                <div className='filter-button'>Filter Button =</div>
              </div>
              <Deal />
              <Deal />
              <Deal />
              <Deal />
              <Deal />
              <Deal />
              <Deal />
              <Deal />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
