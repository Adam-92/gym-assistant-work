export interface DataStatusHandlerProps<T> {
  isLoading: boolean;
  isError: string;
  data?: T;
  children: (data: T) => JSX.Element;
}
