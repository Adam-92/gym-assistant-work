import { PerformanceTableWrapperProps } from "./PerformanceTableWrapper.model";

const PerformanceTableWrapper = <T extends any[]>({
  data,
  tableComponent: TableComponent,
  noDataComponent,
}: PerformanceTableWrapperProps<T>) => {
  if (data.length > 1) {
    return <TableComponent results={data} />;
  }
  return <>{noDataComponent}</>;
};

export default PerformanceTableWrapper;
