import React from 'react';
import {createContext, useContext} from 'react';
import type {CSSProperties} from 'react';

type ThemeContextType = {
  [K in string]: {
    type: "styles",
    value: CSSProperties;
  } | {
    type: "classes",
    value: string[];
  }
};

const ThemeContext = createContext < ThemeContextType | null > (null);

const wireframeTheme: ThemeContextType = {
  box: {
    type: "styles",
    value: {
      border: "1px solid black",
      backgroundColor: "white",
      position: "relative", // To position the X
    }
  }
};

export const ThemeProvider = function ThemeProvider({children} : {
  children : React.ReactNode
}) {
  return (<ThemeContext.Provider value={wireframeTheme}> {children} </ThemeContext.Provider>);
}

export const useTheme = function useTheme() {
  return useContext(ThemeContext);
}
