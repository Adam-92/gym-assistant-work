export interface TabInterface {
  id: number;
  name: string;
  icon: any;
  to: string;
  children?: ChildrenTabInterface[] ;
}

export interface ChildrenTabInterface {
  name: string;
  to: string;
}
