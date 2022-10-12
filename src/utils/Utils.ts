export const changeToPercent = (steps: number, target: number): number => {
  const calculate = Math.round((steps * 100) / target);
  return calculate > 100 ? 100 : calculate;
};

export const minToHours = (min: any): string => {
  const hours = min / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h : ${rminutes}m`;
};

export const updateChartData = (apiData: any, initialData: any): any => {
  console.log(apiData);
  
  const updatedDatasets = initialData.datasets.map(
    (chartData: any, index: number) => {
      chartData.data = [...apiData[index]];
      return chartData;
    }
  );
  return {
    ...initialData,
    datasets: updatedDatasets,
  };
};

/* ---START---DO PRZEMEBLOWANIA WRAZ Z KOMPONENTAMI----- */
export const handleDescription = (
  container: any,
  methodName: any,
  className: string
): any => {
  if (methodName === "add") {
    return container.children[2].classList.add(className);
  }
  if (methodName === "remove") {
    return container.children[2].classList.remove(className);
  }
};

export const addToRefContainer = (el: any, containerRef: any): void => {
  if (el && !containerRef.current.includes(el)) {
    containerRef.current.push(el);
  }
};

export const carouselMovement = (
  ref1: any,
  ref2: any,
  ref3: any,
  containerRef: any,
  currentIndex: any
): any => {
  if (currentIndex === 0) {
    ref1.classList.remove("move-down-right-carousel");
    ref1.classList.add("move-right-long-carousel");
    ref3.classList.remove("move-left-long-carousel");
    ref3.classList.add("move-down-left-carousel");
    ref2.classList.remove("move-down-carousel", "move-right-carousel");
    ref2.classList.add("move-left-carousel");
    handleDescription(ref2, "add", "description-hide-carousel");
    handleDescription(ref1, "remove", "description-show-carousel");
    handleDescription(ref3, "add", "description-show-carousel");
  } else if (currentIndex === 1 && containerRef.current.length > 0) {
    ref1.classList.remove(
      "move-down-right-carousel",
      "move-right-long-carousel"
    );
    ref3.classList.remove("move-left-long-carousel", "move-down-left-carousel");
    ref2.classList.remove("move-right-carousel", "move-left-carousel");
    ref2.classList.add("move-down-carousel");
    handleDescription(ref1, "remove", "description-show-carousel");
    handleDescription(ref3, "remove", "description-show-carousel");
    handleDescription(ref2, "remove", "description-hide-carousel");
  } else if (currentIndex === 2) {
    ref1.classList.remove("move-right-long-carousel");
    ref1.classList.add("move-down-right-carousel");
    ref3.classList.remove("move-down-left-carousel");
    ref3.classList.add("move-left-long-carousel");
    ref2.classList.remove("move-left-carousel", "move-down-carousel");
    ref2.classList.add("move-right-carousel");
    handleDescription(ref1, "add", "description-show-carousel");
    handleDescription(ref3, "remove", "description-show-carousel");
    handleDescription(ref2, "add", "description-hide-carousel");
  }
};

export const containerClass = (name: string): any => {
  if (name === "bodybuilder") return "middle-datasets-carousel";
  if (name === "runner") return "left-datasets-carousel";
  if (name === "athlete") return "right-datasets-carousel";
};

export const goLeft = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  index: number
) => {
  return index === 0 ? setState(2) : setState((prev: number) => prev - 1);
};

export const goRight = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  index: number
) => {
  return index === 2 ? setState(0) : setState((prev: number) => prev + 1);
};

export const viewHistory = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  data: any,
  setLastTraining: any
): any => {
  const datasets = e.target as HTMLElement;
  const exerciseName = (datasets.children[1].children[0] as HTMLElement)
    .innerText;
  const partName = (datasets.parentElement!.previousSibling as HTMLElement)
    .innerText;

  const selectedBodyPart = data.find(
    (bodyPart: any) => bodyPart.part === partName
  );
  const selectedExercise = selectedBodyPart.exercises.find(
    (exercise: any) => exercise.name === exerciseName
  );
  const training = selectedExercise.lastTraining;

  setLastTraining({
    exerciseName: exerciseName,
    training: training,
  });
};

export const getItemCoordinates = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setdatasetsCoordinates: any
) => {
  const datasets = e.target as HTMLElement;
  const coordinates = datasets.getBoundingClientRect();
  setdatasetsCoordinates(coordinates);
};

export const calculatePopoverCoordinates = (
  datasetsCoordinates: any,
  popoverCoordinates: any
) => {
  const newTopCoordinatesPopover = Math.abs(
    datasetsCoordinates.top -
      68 -
      popoverCoordinates.height / 2 +
      datasetsCoordinates.height / 2
  );
  const newLeftCoordinatesPopover = Math.abs(
    datasetsCoordinates.left + datasetsCoordinates.width / 3
  );

  return {
    top: newTopCoordinatesPopover,
    left: newLeftCoordinatesPopover,
  };
};
/* ---KONIEC---DO PRZEMEBLOWANIA WRAZ Z KOMPONENTAMI----- */

export const calculateProgress = (current: number, target: number) => {
  const percent = changeToPercent(current, target);
  return (180 * percent) / 100 + 135;
};

export const firstBigLetter = (name: string): string => {
  return name[0]?.toUpperCase() + name?.slice(1);
};
