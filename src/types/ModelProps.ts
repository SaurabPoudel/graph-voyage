export interface ModelProps<T> {
  ref?: React.MutableRefObject<T>;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}
