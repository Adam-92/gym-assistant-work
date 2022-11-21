import { ReactNode } from "react";

export interface PerformanceTableWrapperProps<T> {
    data: T,
    tableComponent: ( props: {results: T}) => JSX.Element,
    noDataComponent: ReactNode
}
