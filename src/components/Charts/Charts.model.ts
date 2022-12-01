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

export interface BarStepsProps {
  day: string;
  steps: number;
  target: number;
}
export interface SwitchProps {
  period: boolean;
  setMonthlyPeriod: () => void;
  setWeeklyPeriod: () => void;
}

export interface CaloriesData {
  label: string;
  dailyCalories: number;
  caloriesMax: number;
}
