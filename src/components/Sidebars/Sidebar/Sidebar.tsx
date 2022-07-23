import Tab from "../../Tab/Tab";
import { tabs } from "../../Tab/Tabs";
import { SidebarTabs } from "../../../model/Model";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="container-sidebar">
      <header>
        <div className="img-container-sidebar">
          <img src={"http://localhost:3000/assets/logo.png"} alt="logo" />
        </div>
      </header>
      <nav className="nav-sidebar">
        <ul className="parent-sidebar">
          {tabs.map(({ to, id, name, icon, children }: SidebarTabs) => {
            return (
              <Tab
                icon={icon}
                id={id}
                to={to}
                name={name}
                children={children}
                key={name}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
