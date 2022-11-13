import Sidebar from "./Sidebar/Sidebar";
import { DashboardLayoutProps } from "./DashboardLayout.model";
import "./DashboardLayout.css";

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="dashboard-layout">
      <article className="center-dashboard-layout">
        <div className="dimensions-dashboard-layout">
          <Sidebar />
          <section className="content-dashboard-layout">{children}</section>
        </div>
      </article>
    </main>
  );
};
