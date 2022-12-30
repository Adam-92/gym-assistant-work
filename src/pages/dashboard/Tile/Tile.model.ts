export interface TileProps {
  icon: JSX.Element;
  name: string;
  target: number;
  current: number;
  style: StyleTile;
}
export interface StyleTile {
  backgroundIcon: string;
  backgroundHeader: string;
  backgroundContainer: string;
  borderColor: string;
}

export interface StatisticsTile {
  target: number;
  current: number;
  name: string;
}
