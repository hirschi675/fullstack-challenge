import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebutton.css';
import { useState } from 'react'

function Sidebutton(props:any) {
  return (
    <button className={`button-slide slide-right ${props.activeId === props.name? 'active-side-button': ''}`}onClick={() => props.setActiveId(props.name)} > <FontAwesomeIcon icon={props.icon}/>  &nbsp;{String(props.name)} </button>
  );
}

export default Sidebutton;