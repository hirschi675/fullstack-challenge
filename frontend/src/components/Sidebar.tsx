import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css';
import Sidebutton from './Sidebutton';
import { useState } from 'react';



function Sidebar(props:any) {
var organization = props.organization
const [hover, setHover] = useState(false)
const toggleHover = () => {
  setHover(!hover)
}
  return (
    <div className={`sidebar-wrapper ${props.rotate == true? 'closed-bar': 'open-bar'}`}>
      <button className={`toggle-sidebar ${props.rotate == true? '': 'toggle-sidebar-hover'}`} onClick={props.rotateArrow} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <FontAwesomeIcon id="arrow-Sidebar" className={`arrow-sidebar ${props.rotate == true? 'rotate-right': 'rotate-left'}`} icon={faChevronLeft}/>
      </button>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-words">
          <span>{organization}</span>
        </div>
      </div>
      <div className="sidebar-bottom-wrapper">
        <Sidebutton activeId={props.activeId} name="Account 1" icon={faFileInvoice} setActiveId={props.setActiveId} />
        <Sidebutton activeId={props.activeId} name="Account 2" icon={faFileInvoice} setActiveId={props.setActiveId} />
        <Sidebutton activeId={props.activeId} name="Account 3" icon={faFileInvoice} setActiveId={props.setActiveId} />
        <Sidebutton activeId={props.activeId} name="Account 4" icon={faFileInvoice} setActiveId={props.setActiveId} />
        <Sidebutton activeId={props.activeId} name="Account 5" icon={faFileInvoice} setActiveId={props.setActiveId} />
      </div>
    </div>
  );
}

export default Sidebar;
