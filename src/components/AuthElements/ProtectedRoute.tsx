import { useUserContext } from "../../contexts/UserContext";
import { useLocation, Navigate } from "react-router";

const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  let { currentUser } = useUserContext();
  let location = useLocation();

  if (!currentUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
