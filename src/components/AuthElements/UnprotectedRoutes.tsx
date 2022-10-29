import { useUserContext } from "../../contexts/UserContext/UserContext";
import { useLocation, Navigate } from "react-router";

const UnprotectedRoutes = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const { currentUser } = useUserContext();
  const location = useLocation();

  if (currentUser ) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return children;
};

export default UnprotectedRoutes;
