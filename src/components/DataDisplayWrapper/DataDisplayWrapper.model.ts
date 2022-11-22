import { ReactNode } from "react";

export interface DataDisplayWrapperProps<T> {
  data: T;
  displayComponent: (props: { results: T }) => JSX.Element;
  noDataComponent: ReactNode;
}
