export interface BarInterface {
    day: string,
    steps: number,
    target: number
  }
export interface StepChartInterface {
    data: {
      day: string;
      steps: number;
    }[];
  }

export interface SwitchInterface {
    changePeriod: boolean,
    setChangePeriod: React.Dispatch<React.SetStateAction<boolean>>
  }
  
  
  