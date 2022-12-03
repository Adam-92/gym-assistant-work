import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import { useLocation, Navigate } from "react-router";
import { Outlet } from "react-router";
import RoutesLoader from "src/components/Loaders/RoutesLoader/RoutesLoader";

const ProtectedRoute = () => {
  const { currentUser, pending } = useUserContext();
  const location = useLocation();

  if (pending) {
    return <RoutesLoader />;
  }

  if (!currentUser && !pending) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
