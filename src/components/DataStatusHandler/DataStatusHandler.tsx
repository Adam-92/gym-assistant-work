import { DataStatusHandlerProps } from "./DataStatusHandler.model";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

const DataStatusHandler = <T,>({
  isLoading,
  isError,
  data,
  children,
}: DataStatusHandlerProps<T>) => {
  if (isLoading) return <Loader />;
  if (isError) return <h2>Something went wrong please refresh the page</h2>;
  if (!data) return <h2>Sorry, but we haven't found any data</h2>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: "100%" }}
    >
      {children(data)}
    </motion.div>
  );
};

export default DataStatusHandler;
