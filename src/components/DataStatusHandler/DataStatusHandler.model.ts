import { ReactNode } from "react";

export interface DataStatusHandlerProps {
  isLoading: boolean;
  isError: string;
  data: any;
  children: ReactNode;
}
