import { DataStatusHandlerProps } from "./DataStatusHandler.model";

const DataStatusHandler = <T,>({
  isLoading,
  isError,
  data,
  children,
}: DataStatusHandlerProps<T>) => {
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something went wrong please refresh the page</h2>;
  if (!data) return <h2>Sorry, but we haven't found any data</h2>;

  return <>{children(data)}</>;
};

export default DataStatusHandler;
