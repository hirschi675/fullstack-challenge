import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebutton.css';

function Sidebutton(props:any) {
  return (
    <button className={`button-slide slide-right ${props.activeId === props.organization.name? 'active-side-button': ''}`}onClick={() => { props.setActiveId(props.organization.name); }} > <FontAwesomeIcon icon={props.icon}/>  &nbsp; {String(props.organization.name)} </button>
  );
}

export default Sidebutton;