import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './index.scss';

export enum Position {
  TOPLEFT = 'TOPLEFT',
  TOPRIGHT = 'TOPRIGHT',
  BOTTOMLEFT = 'BOTTOMLEFT',
  BOTTOMRIGHT = 'BOTTOMRIGHT',
}

export type BreakPoint = {
  minWidth: number;
  maxWidth?: number;
  label: string;
};

export type ResponsiveWidgetProps = {
  initialPosition?: Position;
  breakPoints: BreakPoint[];
};

const getWidgetPosition = (position: Position) => {
  switch (position) {
    case Position.TOPLEFT:
      return { top: '10px', left: '10px' };
    case Position.BOTTOMLEFT:
      return { bottom: '10px', left: '10px' };
    case Position.TOPRIGHT:
      return { top: '10px', right: '10px' };
    case Position.BOTTOMRIGHT:
      return { bottom: '10px', right: '10px' };
    default:
      return { top: '10px', left: '10px' };
  }
};

const PointPositioner = ({
  currentPosition,
  setPosition,
}: {
  currentPosition: Position;
  setPosition: (val: Position) => void;
}) => {
  return (
    <>
      <div
        className={`rs-position-point rs-position-bottom-left ${
          currentPosition === Position.BOTTOMLEFT ? 'rs-position-active' : ''
        }`}
        onClick={() => setPosition(Position.BOTTOMLEFT)}
      />

      <div
        className={`rs-position-point rs-position-top-left ${
          currentPosition === Position.TOPLEFT ? 'rs-position-active' : ''
        }`}
        onClick={() => setPosition(Position.TOPLEFT)}
      />
      <div
        className={`rs-position-point rs-position-bottom-right ${
          currentPosition === Position.BOTTOMRIGHT ? 'rs-position-active' : ''
        }`}
        onClick={() => setPosition(Position.BOTTOMRIGHT)}
      />
      <div
        className={`rs-position-point rs-position-top-right ${
          currentPosition === Position.TOPRIGHT ? 'rs-position-active' : ''
        }`}
        onClick={() => setPosition(Position.TOPRIGHT)}
      />
    </>
  );
};

const ResponsiveWidget = (props: ResponsiveWidgetProps): React.ReactElement => {
  const [currentPosition, setCurrentPosition] = useState<Position>(
    Position.BOTTOMLEFT
  );
  const [focused, setFocused] = useState<boolean>(false);
  const currentBreakPoint = useRef('');

  props?.breakPoints?.forEach((point: BreakPoint) => {
    const isMatch = useMediaQuery({
      query: `(min-width: ${point.minWidth}px) and (max-width: ${
        point.maxWidth ? point.maxWidth : 999999999999
      }px)`,
    });
    if (isMatch) {
      currentBreakPoint.current = point.label;
    }
  });
  return (
    <div
      className="rs-widget"
      style={getWidgetPosition(currentPosition)}
      onMouseOver={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
    >
      <div className="rs-widget-label">
        {currentBreakPoint.current.toString()}
      </div>
      {focused && (
        <PointPositioner
          currentPosition={currentPosition}
          setPosition={setCurrentPosition}
        />
      )}
    </div>
  );
};

export default ResponsiveWidget;
