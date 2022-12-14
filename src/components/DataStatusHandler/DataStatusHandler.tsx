import { DataStatusHandlerProps } from "./DataStatusHandler.model";
import FetchLoader from "../Loaders/FetchLoader/FetchLoader";
import Transition from "../Transition/Transition";
import Error from "src/errors/components/Error/Error";

const DataStatusHandler = <T,>({
  isLoading,
  error,
  data,
  children,
}: DataStatusHandlerProps<T>) => {
  if (isLoading) return <FetchLoader />;
  if (error) return <Error error={error} />;
  if (!data) return <h2>Sorry, but we haven't found any data</h2>;

  return <Transition>{children(data)}</Transition>;
};

export default DataStatusHandler;
