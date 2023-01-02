import RoutesLoader from "src/components/Loaders/RoutesLoader/RoutesLoader";
import Error from "src/errors/components/Error/Error";
import useSignOut from "src/auth/hooks/useSignOut";

const LogoutPage = () => {
  const { error } = useSignOut();

  if (error) {
    return <Error error={error} />;
  }
  return <RoutesLoader />;
};

export default LogoutPage;
