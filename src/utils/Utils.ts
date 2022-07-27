export const changeToPercent = (steps: number, target: number): number => {
  const calculate = Math.round((steps * 100) / target);
  return calculate > 100 ? 100 : calculate;
};

export const addToRefContainer = (el: any, containerRef: any): void => {
  if (el && !containerRef.current.includes(el)) {
    containerRef.current.push(el);
  }
};
export const minToHours = (min: any): string => {
  const hours = min / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h : ${rminutes}m`;
};

export const addDataToConfig = (apiData: any, config: any): any => {
  const { data } = config;
  const newDataset = data.datasets.map((item: any, index: number) => {
    item.data = [...apiData[index]];
    return item;
  });

  const newData = {
    labels: data.labels,
    datasets: newDataset,
  };
  return { ...config, data: newData };
};
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
  if (name === "bodybuilder") return "middle-item-carousel";
  if (name === "runner") return "left-item-carousel";
  if (name === "athlete") return "right-item-carousel";
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
  const item = e.target as HTMLElement;
  const exerciseName = (item.children[1].children[0] as HTMLElement).innerText;
  const partName = (item.parentElement!.previousSibling as HTMLElement)
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
  setItemCoordinates: any
) => {
  const item = e.target as HTMLElement;
  const coordinates = item.getBoundingClientRect();
  setItemCoordinates(coordinates);
};

export const calculatePopoverCoordinates = (
  itemCoordinates: any,
  popoverCoordinates: any
) => {
  const newTopCoordinatesPopover = Math.abs(
    itemCoordinates.top -
      68 -
      popoverCoordinates.height / 2 +
      itemCoordinates.height / 2
  );
  const newLeftCoordinatesPopover = Math.abs(
    itemCoordinates.left + itemCoordinates.width / 3
  );

  return {
    top: newTopCoordinatesPopover,
    left: newLeftCoordinatesPopover,
  };
};

export const calculateProgress = (current: number, target: number) => {
  const percent = changeToPercent(current, target);
  return (180 * percent) / 100 + 135;
};

export const requestData = async (getData: any, setData: any) => {
  getData().then((res: any) => setData(res));
};

export const nameOfPart = (url: string): string => {
  let part = url.replace("/catalogue/", "");
  return part[0].toUpperCase() + part.slice(1);
};
