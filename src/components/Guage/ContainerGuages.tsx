import { useEffect, useState } from "react";
import { getGauges } from "../../services/Activity";
import Guage from "./Guage";
import "./Guage.css";

interface DataState {
  data: {
    units: string;
    target: number;
    current: number;
  }[];
}

const ContainerGuages = () => {
  const [data, setData] = useState<DataState["data"]>([]);

  useEffect(() => {
    getGauges()
    .then((res) => setData(res));
  }, []);

  return (
    <article className="container-guages">
      {data.map((guage, index) => {
        const { target, current, units } = guage;
        return (
          <Guage 
            target={target}
            current={current} 
            units={units} 
            key={index}
          />
        );
      })}
    </article>
  );
};
export default ContainerGuages;
