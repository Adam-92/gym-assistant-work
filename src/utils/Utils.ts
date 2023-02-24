import { ResultsExercise } from "src/model/model";
import { initialData as caloriesData } from "src/components/Charts/CaloriesChart/config/config";
import { initialData as performanceData } from "src/components/Charts/PerformanceChart/config/config";
import { CaloriesChartData } from "src/firebase/Firebase.model";
import { ChartDataset, ChartData } from "chart.js";


interface CaloriesChartReducer {
  labels: string[];
  caloriesMax: number[];
  dailyCalories: number[];
}

interface PerformanceChartReducer {
  labels: string[];
  bestRecord: number[];
}

const updateDatasetCalories = (
  chartData: ChartData<"line">,
  data: CaloriesChartReducer
) => {
  const updatedDataset = chartData.datasets.map(
    (chartData: ChartDataset<"line">, index) => {
      if (index === 0) {
        chartData.data.push(...data.caloriesMax);
      } else {
        chartData.data.push(...data.dailyCalories);
      }
      return chartData;
    }
  );
  return updatedDataset;
};

const updateDatasetPerformance = (
  chartData: ChartData<"line">,
  data: PerformanceChartReducer
) => {
  const updatedDataset = chartData.datasets.map((chartData) => {
    if (chartData.data.length === 0) {
      chartData.data.push(...data.bestRecord);
    } else {
      chartData.data = [...data.bestRecord];
    }

    return chartData;
  });
  return updatedDataset;
};

export const updateCaloriesChartData = (
  apiData: CaloriesChartData["data"] | undefined
) => {
  if (apiData) {
    const data = apiData.reduce<CaloriesChartReducer>(
      (accumulator, calories) => ({
        labels: [...accumulator.labels, calories.label],
        caloriesMax: [...accumulator.caloriesMax, calories.caloriesMax],
        dailyCalories: [...accumulator.dailyCalories, calories.dailyCalories],
      }),
      { labels: [], caloriesMax: [], dailyCalories: [] }
    );

    const updatedDataset = updateDatasetCalories(caloriesData, data);

    return {
      ...caloriesData,
      labels: data.labels,
      datasets: updatedDataset,
    };
  }

  return caloriesData;
};

export const updatePerformanceChartData = (apiData: ResultsExercise[]) => {
  if (apiData) {
    const data = apiData.reduce<PerformanceChartReducer>(
      (accumulator, results) => ({
        labels: [...accumulator.labels, results.label],
        bestRecord: [
          ...accumulator.bestRecord,
          Math.max(...results.sets.map(({ weight }) => weight)),
        ],
      }),
      {
        labels: [],
        bestRecord: [],
      }
    );

    const updatedDataset = updateDatasetPerformance(performanceData, data);

    return {
      ...performanceData,
      labels: data.labels,
      datasets: updatedDataset,
    };
  }

  return performanceData;
};

export const firstBigLetter = (name: string): string => {
  return name[0]?.toUpperCase() + name?.slice(1);
};

export const upperCaseAllWords = (text: string) =>
  text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
