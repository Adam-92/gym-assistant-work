import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { tabs } from "./tabs";
import SidebarTab from "./SidebarTab/SidebarTab";
import useSignOut from "src/auth/hooks/useSignOut";
import { useModal } from "src/contexts/modal/hooks/useModal";
import { useSidebar } from "src/contexts/sidebar/hooks/useSidebar";
import "./Sidebar.css";

const Sidebar = () => {
  const { makeRequest } = useSignOut();
  const { isOpenSidebar, closeSidebar, handleTogglerVisibilty } = useSidebar();
  const { modalPartName } = useModal();

  return (
    <aside
      className={`container-sidebar ${isOpenSidebar && "show-sidebar"} ${
        modalPartName && "z-index-sidebar"
      }`}
    >
      {handleTogglerVisibilty()}
      <div className="content-sidebar">
        <header>
          <div className="img-container-sidebar">
            <img src={"../assets/logo.png"} alt="logo" />
          </div>
        </header>
        <nav className="nav-sidebar">
          <ul className="parent-sidebar">
            {tabs.map(({ to, name, icon, childTabs }) => (
              <SidebarTab
                name={name}
                to={to}
                icon={icon}
                childTabs={childTabs}
                key={name}
                onClick={closeSidebar}
              />
            ))}
            <SidebarTab
              name="Logout"
              to="/logout"
              icon={faRightFromBracket}
              onClick={makeRequest}
            />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
