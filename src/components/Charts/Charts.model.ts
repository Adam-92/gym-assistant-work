export interface StepsValues {
  day: string;
  steps: number;
}
export interface BarStepsValues {
  day: string;
  steps: number;
  target: number;
}
export interface SwitchInterface {
  period: boolean;
  monthlyPeriod: () => void;
  weeklyPeriod: () => void;
}
