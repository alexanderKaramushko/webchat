import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { FC, MouseEvent, PropsWithChildren, ReactElement, useRef, useState } from 'react';
import { useDraggable } from './hooks';

const Draggable: FC<PropsWithChildren<{}>> = ({ children }): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [draggableInfo, setDraggableInfo] = useDraggable(ref);
  const { left = 0, top = 0 } = draggableInfo;

  const [captured, setCaptured] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const [shiftY, setShiftY] = useState(0);

  function handleMouseDown(event: MouseEvent<HTMLDivElement>): void {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();

    setCaptured(true);
    setShiftX(clientX - rect.left);
    setShiftY(clientY - rect.top);
  }

  function handleMouseUp(): void {
    setCaptured(false);
  }

  function handleNouseMove(event: MouseEvent<HTMLDivElement>): void {
    if (captured) {
      setDraggableInfo(event.pageX - shiftX, event.pageY - shiftY);
    }
  }

  const style: CSSProperties = {
    left: `${left}px`,
    position: 'absolute',
    top: `${top}px`,
  };

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onMouseDown={handleMouseDown}
      onMouseMove={handleNouseMove}
      onMouseUp={handleMouseUp}
      style={style}
    >
      {children}
    </div>
  );
};

Draggable.displayName = 'Draggable';

export default Draggable;
