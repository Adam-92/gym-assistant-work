export interface TabInterface {
  id: number;
  name: string;
  icon: any;
  to: string;
  nestedTab?: NestedTabInterface[] ;
}

export interface NestedTabInterface {
  name: string;
  to: string;
}
