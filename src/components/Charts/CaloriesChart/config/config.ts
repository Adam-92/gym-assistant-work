const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
/* --- Animation --- */
let delayed: boolean;

/* --- Data --- */
const data = {
  labels: days,
  datasets: [
    {
      label: "Limit",
      data: [],
      borderColor: "rgb(235, 96, 140)",
    },
    {
      label: "Day",
      data: [],
      borderColor: "rgb(223, 154, 235, 1)",
      tension: 0.3,
      fill: true,
      backgroundColor: "rgba(103,76,175,0.3)",
      pointRadius: 6,
      pointBorderColor: "rgb(255,255,255)",
      pointBorderWidth: 3,
      pointBackgroundColor: "rgb(234, 130, 169)",
    },
  ],
};
/* --- Config --- */
export const config = {
  type: "line",
  data: data,
  options: {
    radius: 0,
    hitRadius: 30,
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
        position: "top",
      },
      title: {
        display: true,
        text: "Caloric balance",
        font: {
          size: 22,
          weight: "bold",
          family: "'Noto Sans', sans-serif",
        },
        align: "start",
        color: "rgb(103, 76, 175)",
      },
    },
  },
};
