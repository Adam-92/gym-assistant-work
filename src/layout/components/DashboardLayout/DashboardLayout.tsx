import Sidebar from "./Sidebar/Sidebar";
import { DashboardLayoutProps } from "./DashboardLayout.model";
import { useSidebar } from "src/contexts/sidebar/hooks/useSidebar";
import { useModal } from "src/contexts/modal/hooks/useModal";
import "./DashboardLayout.css";

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isOpenSidebar, closeSidebar } = useSidebar();
  const { modalPartName } = useModal();

  return (
    <main className="dashboard-layout">
      <article className="center-dashboard-layout">
        <div className="dimensions-dashboard-layout">
          <Sidebar />
          <section
            className={`${isOpenSidebar && "dark"}`}
            onClick={() => closeSidebar()}
          ></section>
          <section
            className={`content-dashboard-layout ${
              modalPartName && "off-overflow-dashboard-layout"
            }`}
          >
            {children}
          </section>
        </div>
      </article>
    </main>
  );
};
