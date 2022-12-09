import { GuageProps } from "src/components/Guage/Guage.model";
import { getGauges } from "../../firebase/services/Activity";
import useFetchData from "src/hooks/useFetchData";
import Guage from "./Guage";
import "./Guage.css";
import DataStatusHandler from "../DataStatusHandler/DataStatusHandler";

const ContainerGuages = () => {
  const { isLoading, isError, data } = useFetchData(getGauges);

  return (
    <DataStatusHandler isLoading={isLoading} isError={isError} data={data}>
      {(data) => (
        <article className="container-guages">
          {data.map(({ target, current, units }: GuageProps) => (
            <Guage
              target={target}
              current={current}
              units={units}
              key={units}
            />
          ))}
        </article>
      )}
    </DataStatusHandler>
  );
};
export default ContainerGuages;
