import Tab from "../Tabs/Tab/Tab";
import { tabs } from "../Tabs/Tabs";
import { TabInterface } from "src/model/Tabs.model";
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
          {tabs.map(({ to, id, name, icon, children }: TabInterface) => {
            return (
                <Tab
                  name={name}
                  to={to}
                  id={id}
                  icon={icon}
                  children={children}
                  key={id}
                />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
