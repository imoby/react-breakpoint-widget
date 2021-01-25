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
export declare type ResponsiveWidgetProps = {
    initialPosition?: Position;
    breakPoints: BreakPoint[];
};
declare const ResponsiveWidget: (props: ResponsiveWidgetProps) => React.ReactElement;
export default ResponsiveWidget;
