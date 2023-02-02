export interface Picture {
  picName: string
  picUrl: string
  picWidth?: number
  picHeight?: number
}
export interface ImageClickEvent {
  position: {
    x: number;
    y: number;
  };
  previousImage?: Picture;
  currentImage: Picture;
  timestamp: number
}
