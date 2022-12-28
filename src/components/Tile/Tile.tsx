import { TileProps } from "src/components/Tile/Tile.model";
import Statistics from "./Statistics";

const Tile = (tile: TileProps) => {
  const { backgroundIcon, backgroundHeader, backgroundContainer, borderColor } =
    tile.style;

  return (
    <article className="tile" style={{ backgroundColor: backgroundContainer }}>
      <div
        className="header-tile"
        style={{ backgroundColor: backgroundHeader, borderColor: borderColor }}
      >
        <div
          className="icon-tile"
          style={{ backgroundColor: backgroundIcon, borderColor: borderColor }}
        >
          {tile.icon}
        </div>
        <div className="name-tile">
          <span>{tile.name}</span>
        </div>
      </div>
      <Statistics
        target={tile.target}
        current={tile.current}
        name={tile.name}
      />
    </article>
  );
};

export default Tile;
