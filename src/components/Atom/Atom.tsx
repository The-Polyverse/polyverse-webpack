import React, { LegacyRef, createElement, forwardRef } from 'react';

type DesignToken = 'primary'
                  | 'secondary';

type DesignTokenProps = {
  [K in DesignToken]?: boolean;
}

export type AtomProps = {
  type?: string;
  children?: React.ReactNode;
} & DesignTokenProps;

/**
 * Extracts the design token props from the given props object.
 */
function extractDesignTokens(props: DesignTokenProps): DesignToken[] {
  return Object.keys(props).filter((key) => props[key as DesignToken]) as DesignToken[];
}

type DesignTokenClassMap = {
  [K in string]: {
    [K in DesignToken]: string;
  };
};

const designTokenClassMap: DesignTokenClassMap = {
  div: {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  },
};

/**
 * Maps the given design tokens to the corresponding tailwind classes.
 */
function mapDesignTokensToClasses(tokens: DesignToken[], type: string): string[] {
  return tokens.map((token) => designTokenClassMap[type][token]);
}

/**
 * Atom is the base component for all other components in the Atomic Design infrastructure.
 * It is a wrapper around the HTML element that is being rendered and is responsible for
 * mapping its given boolean design token attributes into the corresponding tailwind
 * classes.
 */
export const Atom = forwardRef(function Atom({type = 'div', children, ...props}: AtomProps, ref: LegacyRef<HTMLDivElement>) {
  const designTokens = extractDesignTokens(props);
  const classes = mapDesignTokensToClasses(designTokens, type);
  const className = classes.join(' ');
  
  return createElement(type, {ref, className}, children);
});
