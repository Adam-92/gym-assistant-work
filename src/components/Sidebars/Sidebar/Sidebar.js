import "./Sidebar.css";
import logo from "../../../img/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { faDumbbell, faGear, faRightFromBracket, faCalendarDays} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    const [tabs, setTabs ] = useState([
        {  
            id: 1,
            name: 'Dashboard',
            active: true,
            icon: faWindows
        },
        {   
            id: 2,
            name: 'Exercises',
            active: false,
            icon: faDumbbell
        },
        {   
            id: 3,
            name: 'Plan',
            active: false,
            icon: faCalendarDays
        },
        {   
            id: 4,
            name: 'Settings',
            active: false,
            icon: faGear
        },
        {   
            id: 5,
            name: 'Logout',
            active: false,
            icon: faRightFromBracket
      }
    ])
  
    const changeCSSRadius = (e) => {
        const tabId = parseInt(e.target.id);
        setTabs(tabs => tabs.filter(
            tab => {
                if(tab.id === tabId) {
                    tab.active = true
                }
                if(tab.id !== tabId ){
                    tab.active = false
                }
                return tab 
            }
        ))
    }

    return (
    <aside className="container-sidebar">
      <header>
        <div className="img-container-sidebar">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <nav className="nav-sidebar" >
        <ul className="border-radius-sidebar" onClick={(e)=>{changeCSSRadius(e)}}>
          {tabs.map((tab,index) => {
            return(
                <li className={`${tab.active && 'active'}`} id={tab.id} key={index}>
                    <FontAwesomeIcon icon={tab.icon} color='white' size='lg' className={`icon-sidebar ${tab.active && 'focus'}`} />
                    {tab.name}
                </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
