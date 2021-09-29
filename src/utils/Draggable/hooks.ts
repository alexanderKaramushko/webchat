import { MutableRefObject, useEffect, useState } from 'react';
import { DraggableInfo } from './type';

// eslint-disable-next-line max-len
export function useDraggable(ref: MutableRefObject<HTMLDivElement | null>): [DraggableInfo, (left: number, top: number) => void] {
  const [draggableInfo, setDraggableInfo] = useState<DraggableInfo>({ left: 50, top: 50 });

  useEffect(() => {
    if (ref.current) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = ref.current;

      setDraggableInfo({
        height: offsetHeight,
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
      });
    }
  }, []);

  function moveAt(left: number, top: number): void {
    const {
      height = 0,
      width = 0,
    } = draggableInfo;

    setDraggableInfo({
      height,
      left,
      top,
      width,
    });
  }

  return [draggableInfo, moveAt];
}
