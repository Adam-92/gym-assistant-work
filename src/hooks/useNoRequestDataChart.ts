import { ResultsExercise, ResultSets } from "src/model/model";
import { ChartData } from "chart.js";

const useNoRequestDataChart = (initialData: ChartData<"line">, data: any) => {
  const labels = data.map((result: ResultsExercise) => result.label);

  //Pobiera najlepszy wynik ze wszystkich serii
  const bestRecords = data.map((result: ResultsExercise) =>
    Math.max(...result.sets.map(({ weight }: ResultSets) => weight))
  );

  const newDataset = initialData.datasets.map((chartData) => {
    //Bez tego warunku renderuje się ten hook i dwa razy
    //wykonuje się ta funkcja, przez co mam zdublowane wyniki
    //w datasets
    if (chartData.data.length === 0) {
      chartData.data.push(...bestRecords);
    }

    return chartData;
  });

  const updatedData: ChartData<"line"> = {
    ...initialData,
    labels: labels,
    datasets: newDataset,
  };

  return {
    updatedData,
  };
};

export default useNoRequestDataChart;
