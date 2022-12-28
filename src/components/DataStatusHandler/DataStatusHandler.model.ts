export interface DataStatusHandlerProps<T> {
  isLoading: boolean;
  error: string;
  data?: T;
  children: (data: T) => JSX.Element;
}
