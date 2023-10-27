import React, { CSSProperties, FunctionComponent } from "react";
import {useTheme} from "../../../theme/context";
import {getStyling} from "../../../utils/styles";

type BoxProps = {
  rows?: number;
  cols?: number;
  rowStart?: number;
  rowEnd?: number;
  colStart?: number;
  colEnd?: number;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
};

export const Box: FunctionComponent<BoxProps> = function Box(props) {
  const {
    rows = 1,
    cols = 1,
    rowStart = 1,
    rowEnd = rows + 1,
    colStart = 1,
    colEnd = cols + 1,
    styles,
    children,
    className,
  } = props;

  const theme = useTheme();
  const {style} = getStyling(theme.box);
  const {classes} = getStyling(theme.box2);

  const boxStyle = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    ...styles,
    ...style
  };

  const boxClasses = [
    ...classes,
    `grid-rows-${rows}`,
    `grid-cols-${cols}`,
    `col-start-${colStart}`,
    `col-end-${colEnd}`,
    `row-start-${rowStart}`,
    `row-end-${rowEnd}`,
  ];

  const divProps = true ? { className: `${boxClasses.join(" ")} ${className}` } : { style: boxStyle };

  const styleProps: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top left, transparent 49%, black 49%, black 51%, transparent 51%), linear-gradient(to top right, transparent 49%, black 49%, black 51%, transparent 51%)'
  }

  const classProps: string[] = [
    'absolute',
    'top-0',
    'left-0',
    'right-0',
    'bottom-0',
    'bg-gradient-to-tl',
    'from-transparent',
    'via-black',
    'to-transparent',
    'bg-gradient-to-tr',
    'from-transparent',
    'via-black',
    'to-transparent',
  ];

  const innerDivProps = true ? { className: classProps.join(" ") } : { style: styleProps };

  return (<div {...divProps}> {/* Draw X from corner to corner */}
    <div {...true ? { className: innerDivProps.className } : { style: innerDivProps.style }}/> {children} </div>);
};
