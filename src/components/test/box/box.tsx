import React from "react";
import { useTheme } from "../../../theme/context";
import { getStyling } from "../../../utils/styles";

export const Box: React.FunctionComponent<any> = function Box({ rows, cols, rowStart, rowEnd, colStart, colEnd, children, styles }) {
  const theme = useTheme();
  const { style } = getStyling(theme.box);
  
  const boxStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    ...style,
  };


  return (
    <div style={{...boxStyle, ...styles}}>
      {/* Draw X from corner to corner */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to top left, transparent 49%, black 49%, black 51%, transparent 51%), linear-gradient(to top right, transparent 49%, black 49%, black 51%, transparent 51%)'
      }} />
      {children}
    </div>
  );
};
