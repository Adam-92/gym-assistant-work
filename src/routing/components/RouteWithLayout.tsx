import { Outlet } from "react-router";
import { DashboardLayout } from "../../layout/components/DashboardLayout/DashboardLayout";
import { AppProviders } from "src/routing/AppProviders";

export const RouteWithLayout = () => {
  return (
    <AppProviders>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProviders>
  );
};
