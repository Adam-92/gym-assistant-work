import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import { useLocation, Navigate } from "react-router";
import { Outlet } from "react-router";

const UnprotectedRoute = () => {
  const { currentUser, pending } = useUserContext();
  const location = useLocation();

  if (currentUser && !pending) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default UnprotectedRoute;
