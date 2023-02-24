import { useLocation, Navigate } from "react-router";
import { Outlet } from "react-router";
import RoutesLoader from "src/components/Loaders/RoutesLoader/RoutesLoader";
import { useAuthListener } from "src/auth/hooks/useAuthListener";

const UnprotectedRoute = () => {
  const { currentUser, isLoading } = useAuthListener();

  const location = useLocation();

  if (isLoading) {
    return <RoutesLoader />;
  }

  if (currentUser && !isLoading) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default UnprotectedRoute;
