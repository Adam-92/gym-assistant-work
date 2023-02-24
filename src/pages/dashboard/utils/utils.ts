export const changeToPercent = (steps: number, target: number): number => {
    const calculate = Math.round((steps * 100) / target);
    return calculate > 100 ? 100 : calculate;
  };
  
export const minToHours = (min: number) => {
    const hours = min / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}h : ${rminutes}m`;
  };

export const calculateProgress = (current: number, target: number) => {
    const percent = changeToPercent(current, target);
    return (180 * percent) / 100 + 135;
  };
