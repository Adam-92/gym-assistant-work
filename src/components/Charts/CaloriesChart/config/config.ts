import { ChartData, ChartOptions } from "chart.js";

let delayed: boolean;

export const initialData: ChartData<"line"> = {
  labels: [],
  datasets: [
    {
      label: "Limit",
      data: [],
      borderColor: "rgb(235, 96, 140)",
    },
    {
      label: "Day",
      data: [],
      borderColor: "rgb(223, 154, 235)",
      tension: 0.3,
      fill: true,
      backgroundColor: "rgba(103,76,175,0.3)",
      pointRadius: 5,
      pointBorderColor: "rgb(255,255,255)",
      pointBorderWidth: 3,
      pointBackgroundColor: "rgb(234, 130, 169)",
    },
  ],
};

export const options: ChartOptions<"line"> = {
  elements: {
    point: {
      radius: 0,
      hitRadius: 30,
    },
  },
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context: any) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
/*     title: {
      display: true,
      text: "Calorific balance",
      font: {
        size: 22,
        weight: "bold",
        family: "'Noto Sans', sans-serif",
      },
      align: "start" as const,
      color: "rgb(103, 76, 175)",
    }, */
  },
};
