import React from 'react';
import './index.scss';
export declare enum Position {
    TOPLEFT = "TOPLEFT",
    TOPRIGHT = "TOPRIGHT",
    BOTTOMLEFT = "BOTTOMLEFT",
    BOTTOMRIGHT = "BOTTOMRIGHT"
}
export declare type BreakPoint = {
    minWidth: number;
    maxWidth?: number;
    label: string;
};
export declare type BreakpointWidgetProps = {
    initialPosition?: Position;
    breakPoints: BreakPoint[];
};
declare const BreakpointWidget: (props: BreakpointWidgetProps) => React.ReactElement;
export default BreakpointWidget;
