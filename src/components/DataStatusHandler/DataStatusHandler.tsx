import { DataStatusHandlerProps } from "./DataStatusHandler.model";
import FetchLoader from "../Loaders/FetchLoader/FetchLoader";
import Transition from "../Transition/Transition";

const DataStatusHandler = <T,>({
  isLoading,
  error,
  data,
  children,
}: DataStatusHandlerProps<T>) => {
  if (isLoading) return <FetchLoader />;
  if (error) return <h2>Something went wrong please refresh the page</h2>;
  if (!data) return <h2>Sorry, but we haven't found any data</h2>;

  return <Transition style={{ height: "100%" }}>{children(data)}</Transition>;
};

export default DataStatusHandler;
