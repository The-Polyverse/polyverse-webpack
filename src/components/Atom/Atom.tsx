import React, { LegacyRef, createElement, forwardRef } from 'react';

type DesignToken = 
    // Colours
    'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'outline'
    // Size
  | 'large'
  | 'small'
    // State
  | 'disabled'
  | 'active'
  ;

const designTokens = new Set<DesignToken>([
  'primary',
  'secondary',
]);

type DesignTokenProps = {
  [K in DesignToken]?: boolean;
}

export type AtomProps = {
  type?: string;
  children?: React.ReactNode;
} & DesignTokenProps & React.HTMLProps<HTMLElement>

type DesignTokenClassMap = {
  [K in string]: {
    [K in DesignToken]: string;
  };
};

type DefaultDesignTokenClassMap = {
  [K in string]: string;
};

const designTokenClassMap: DesignTokenClassMap = {
  div: {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  },
  button: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  },
};

const defaultDesignTokenClassMap: DefaultDesignTokenClassMap = {
  div: '',
  button: 'btn',
};

/**
 * Extracts the design token props from the given props object.
 */
function extractDesignTokens(props: DesignTokenProps): DesignToken[] {
  return Object.keys(props).filter((key): key is DesignToken => designTokens.has(key as DesignToken));
}

/**
 * Maps the given design tokens to the corresponding tailwind classes.
 */
function mapDesignTokensToClasses(tokens: DesignToken[], type: string): string[] {
  return designTokenClassMap[type] !== undefined
          ? tokens.map((token) => designTokenClassMap[type][token])
          : [];
}

/**
 * Returns the remaining props that are not design tokens.
 */
function getRemainingProps(props: any, designTokens: DesignToken[]) {
  const remainingProps = Object.keys(props).filter((prop): prop is DesignToken => !designTokens.includes(prop as DesignToken));
  const filteredPropValues = remainingProps.map((prop: string) => (props as any)[prop]);
  const filteredProps = remainingProps.reduce((acc: any, prop: string, index: number) => {
    acc[prop] = filteredPropValues[index];
    return acc;
  }, {});

  return filteredProps;
}

/**
 * Atom is the base component for all other components in the Atomic Design infrastructure.
 * It is a wrapper around the HTML element that is being rendered and is responsible for
 * mapping its given boolean design token attributes into the corresponding tailwind
 * classes.
 */
export const Atom = forwardRef(function Atom({ type = 'div', children, ...props }: AtomProps, ref: LegacyRef<HTMLElement>) {
  const designTokens = extractDesignTokens(props);
  const classes = mapDesignTokensToClasses(designTokens, type);
  const className = `${props.className || ''} ${defaultDesignTokenClassMap[type] || ''} ${classes.join(' ')}`.trim();
  const filteredProps = getRemainingProps(props, designTokens);

  console.log('Atom', { type, children, props, designTokens, classes, className, filteredProps });

  return createElement(type, { ref, ...(className.length > 0 ? { className } : {}), ...filteredProps }, children);
});

