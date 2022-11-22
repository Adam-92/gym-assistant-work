import { Outlet } from "react-router";
import { DashboardLayout } from "../../layout/components/DashboardLayout/DashboardLayout";

export const RouteWithLayout = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
