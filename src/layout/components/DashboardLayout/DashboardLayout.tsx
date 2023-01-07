import Sidebar from "./Sidebar/Sidebar";
import { DashboardLayoutProps } from "./DashboardLayout.model";
import { useSidebar } from "src/contexts/sidebar/hooks/useSidebar";
import "./DashboardLayout.css";

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isOpenSidebar, closeSidebar } = useSidebar();

  return (
    <main className="dashboard-layout">
      <article className="center-dashboard-layout">
        {/* <div className="dark-dashboard-layout"></div> */}
        <div className="dimensions-dashboard-layout">
          <Sidebar />
          <section
            className={`${isOpenSidebar && "dark"}`}
            onClick={() => closeSidebar()}
          ></section>
          <section className="content-dashboard-layout">{children}</section>
        </div>
      </article>
    </main>
  );
};
