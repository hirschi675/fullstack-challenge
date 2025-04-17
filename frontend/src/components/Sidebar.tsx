import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css';
import Sidebutton from './Sidebutton';
import { useState, useEffect } from 'react';



function Sidebar(props:any) {
const [hover, setHover] = useState(false)
const toggleHover = () => {
  setHover(!hover)
}
useEffect(() => {
  if (props.organizations.length > 0 && !props.activeId) {
    props.setActiveId(props.organizations[0]?.name);
  }
}, [props.organizations]);

useEffect(() => {
  document.getElementById("side-toggle-button")?.click();
}, []);
  return (
    <div className={`sidebar-wrapper ${props.rotate == true? 'closed-bar': 'open-bar'}`}>
      <button id="side-toggle-button" className={`toggle-sidebar ${props.rotate == true? '': 'toggle-sidebar-hover'}`} onClick={props.rotateArrow} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <FontAwesomeIcon id="arrow-Sidebar" className={`arrow-sidebar ${props.rotate == true? 'rotate-right': 'rotate-left'}`} icon={faChevronLeft}/>
      </button>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-words">
          <span>Organization</span>
        </div>
      </div>
      <div className="sidebar-bottom-wrapper">
        {props.organizations.map((organization: any, index: any) => (
          <Sidebutton id={"sidebutton" + index} key={organization.id || index} activeId={props.activeId} organization={organization} icon={faFileInvoice} setActiveId={props.setActiveId} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
