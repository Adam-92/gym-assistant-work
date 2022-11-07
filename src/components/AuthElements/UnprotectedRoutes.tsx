import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import { useLocation, Navigate } from "react-router";

const UnprotectedRoutes = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { currentUser, pending } = useUserContext();
  const location = useLocation();

  if (currentUser && !pending) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return children;
};

export default UnprotectedRoutes;
