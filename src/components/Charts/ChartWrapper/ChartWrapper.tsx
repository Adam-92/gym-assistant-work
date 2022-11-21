import { ChartWrapperProps } from "../ChartWrapper/ChartWrapper.model";

const ChartWrapper = <T extends any[]>({
  data,
  chartComponent: ChartComponent,
  noDataComponent,
}: ChartWrapperProps<T>) => {
  if (data.length > 1) {
    return <ChartComponent results={data} />;
  }
  return <>{noDataComponent}</>;
};

export default ChartWrapper;
