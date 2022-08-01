import Statistics from "./Statistics";
import { TileInterface } from "src/model/Tile.model";
const Tile = ({ icon, name, target, current, style }: TileInterface) => {
  const { 
    backgroundIcon, 
    backgroundHeader, 
    backgroundContainer, 
    borderColor 
    } =  style;

  return (
    <article
      className="container-tile"
      style={{ backgroundColor: backgroundContainer }}
    >
      <div
        className="header-tile"
        style={{ backgroundColor: backgroundHeader, borderColor: borderColor }}
      >
        <div
          className="icon-tile"
          style={{ backgroundColor: backgroundIcon, borderColor: borderColor }}
        >
          {icon}
        </div>
        <div className="name-tile">
          <span>{name}</span>
        </div>
      </div>
      <Statistics target={target} current={current} name={name} />
    </article>
  );
};

export default Tile;
