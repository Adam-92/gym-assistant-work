import { ReactNode } from "react";

/* export interface DataStatusHandlerProps<T> {
  isLoading: boolean;
  isError: string;
  data: T;
  children: (props: T) => JSX.Element;
} */

export interface DataStatusHandlerProps {
  isLoading: boolean;
  isError: string;
  data: any;
  children: ReactNode;
}
