import { DataDisplayWrapperProps } from "./DataDisplayWrapper.model";

const DataDisplayWrapper = <T extends any[]>({
  data,
  displayComponent: DisplayComponent,
  noDataComponent,
}: DataDisplayWrapperProps<T>) => {
  if (data.length > 1) {
    return <DisplayComponent results={data} />;
  }
  return <>{noDataComponent}</>;
};

export default DataDisplayWrapper;
