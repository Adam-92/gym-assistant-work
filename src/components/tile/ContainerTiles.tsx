import Tile from "./Tile";
import { TileInterface } from "../../model/Model"
import { useEffect, useState } from "react";
import { getTilesData } from "../../services/Activity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faBurger,
  faWeightHanging,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import "./tile.css";

const ContainerTiles = () => {
  const [tiles, setTiles] = useState([]);

  const icons = [
    <FontAwesomeIcon icon={faShoePrints} className="fa-rotate-270" />,
    <FontAwesomeIcon icon={faBurger} />,
    <FontAwesomeIcon icon={faDumbbell} />,
    <FontAwesomeIcon icon={faWeightHanging} />,
  ];

  useEffect(() => {
    getTilesData().then((data) => setTiles(data));
  }, []);

  return (
    <div className="tile">
      {tiles.map((tile: TileInterface, index: number) => {
        return (
          <Tile
            key={index}
            icon={icons[index]}
            name={tile.name}
            target={tile.target}
            current={tile.current}
            style={tile.style}
          />
        );
      })}
    </div>
  );
};
export default ContainerTiles;
