import type { CSSProperties } from 'react';

export function getStyling(themeComponent : {
  type :"styles";
  value : CSSProperties
} | {
  type :"classes";
  value : string[]
}) {
  switch (themeComponent.type) {
    case "classes":
      return { className: themeComponent.value };
    case "styles":
      return { style: themeComponent.value };
    default:
      return {};
  }
}
