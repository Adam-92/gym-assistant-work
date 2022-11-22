export interface StepsValues {
  day: string;
  steps: number;
}

export interface BarStepsProps {
  day: string;
  steps: number;
  target: number;
}
export interface SwitchProps {
  period: boolean;
  monthlyPeriod: () => void;
  weeklyPeriod: () => void;
}

export interface CaloriesData {
  label: string;
  dailyCalories: number;
  caloriesMax: number;
}
