export interface CarouselItemInterface {
  name: string;
  img: string;
  description: string;
  containerRef: any;
}

export interface CarouselInterface {
  characters: {
    name: string;
    description: string;
    img: string;
  }[];
}
