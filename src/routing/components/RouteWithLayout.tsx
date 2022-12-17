import { Outlet } from "react-router";
import { DashboardLayout } from "../../layout/components/DashboardLayout/DashboardLayout";
import { SidebarProvider } from "src/contexts/sidebar/provider/SidebarProvider";

export const RouteWithLayout = () => {
  return (
    <SidebarProvider>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </SidebarProvider>
  );
};
