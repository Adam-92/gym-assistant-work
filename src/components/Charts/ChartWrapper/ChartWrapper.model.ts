import { ReactNode } from "react";

export interface ChartWrapperProps<T> {
  data: T;
  chartComponent: (props: { results: T }) => JSX.Element;
  noDataComponent: ReactNode;
}
