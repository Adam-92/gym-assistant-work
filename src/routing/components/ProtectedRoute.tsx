import { useLocation, Navigate } from "react-router";
import { Outlet } from "react-router";
import { useAuthListener } from "src/auth/hooks/useAuthListener";
import RoutesLoader from "src/components/Loaders/RoutesLoader/RoutesLoader";

export const ProtectedRoute = () => {
  const { currentUser, isLoading } = useAuthListener();

  const location = useLocation();

  if (isLoading) {
    return <RoutesLoader />;
  }

  if (!currentUser && !isLoading) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
