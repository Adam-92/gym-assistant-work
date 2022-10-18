export interface ControlledSwitchInteface {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
