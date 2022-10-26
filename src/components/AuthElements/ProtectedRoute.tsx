import { useUserContext } from "../../contexts/UserContext/UserContext";
import { useLocation, Navigate } from "react-router";

const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { currentUser, pending } = useUserContext();
  const location = useLocation();

  if (!currentUser && pending) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
