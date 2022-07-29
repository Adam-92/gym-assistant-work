import { useEffect, useState } from "react";
import { GuageInterface } from "src/model/Guage.model";
import { getGauges } from "../../services/Activity";
import Guage from "./Guage";
import "./Guage.css";

const ContainerGuages = () => {
  const [data, setData] = useState<GuageInterface[]>([]);

  useEffect(() => {
    getGauges().then((res) => setData(res));
  }, []);

  return (
    <article className="container-guages">
      {data &&
        data.map(
          ({ target, current, units }: GuageInterface, index: number) => {
            return (
              <Guage
                target={target}
                current={current}
                units={units}
                key={index}
              />
            );
          }
        )}
    </article>
  );
};
export default ContainerGuages;
