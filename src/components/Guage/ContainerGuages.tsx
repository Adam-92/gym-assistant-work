import { GuageProps } from "src/components/Guage/Guage.model";
import { getGauges } from "../../firebase/services/activity";
import useFetchData from "src/hooks/useFetchData";
import Guage from "./Guage";
import DataStatusHandler from "../DataStatusHandler/DataStatusHandler";
import Transition from "../Transition/Transition";
import "./Guage.css";

const ContainerGuages = () => {
  const { isLoading, error, data } = useFetchData(getGauges);

  return (
    <DataStatusHandler isLoading={isLoading} error={error} data={data}>
      {(data) => (
        <Transition>
          <article className="container-guage wrap width-guage">
            {data.map(({ target, current, units }: GuageProps) => (
              <Guage
                target={target}
                current={current}
                units={units}
                key={units}
              />
            ))}
          </article>
        </Transition>
      )}
    </DataStatusHandler>
  );
};
export default ContainerGuages;
