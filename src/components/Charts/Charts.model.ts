export interface StepsValues {
  day: string;
  steps: number;
}
export interface WeeklySteps {
  weeklyData: StepsValues[];
}

export interface MonthlySteps {
  monthlyData: StepsValues[];
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
