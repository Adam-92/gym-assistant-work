import useFetchData from "../../../../hooks/useFetchData";
import Tile from "./Tile";
import DataStatusHandler from "../../../../components/DataStatusHandler/DataStatusHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import { getTilesData } from "src/firebase/services/activity";
import Transition from "../../../../components/Transition/Transition";

const tileIcons = [
  <FontAwesomeIcon icon={faShoePrints} className="fa-rotate-270" />,
  <FontAwesomeIcon icon={faWeightHanging} />
];

const ContainerTiles = () => {
  const { data, isLoading, error } = useFetchData(getTilesData);
  
  return (
    <DataStatusHandler isLoading={isLoading} data={data} error={error}>
      {(data) => (
        <Transition>
          <div className="container-tiles wrap">
            {data.map((tile, index) => {
              return (
                <Tile
                  key={tile.name}
                  icon={tileIcons[index]}
                  name={tile.name}
                  target={tile.target}
                  current={tile.current}
                  style={tile.style}
                />
              );
            })}
          </div>
        </Transition>
      )}
    </DataStatusHandler>
  );
};
export default ContainerTiles;
