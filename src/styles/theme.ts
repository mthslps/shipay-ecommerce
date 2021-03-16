import { DefaultTheme as StyledDefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    shadows: { [key in keyof typeof shadows]: string };
    fontTypes: { [key in keyof typeof fontTypes]: string };
    spacing: (px: number) => number;
  }
}

export const themeColors = {
  black: "#0F0F0F",
  blue: "#4989b5",
  gray1: "#E7E7E7",
  gray2: "#9f9f9f",
  green: "#55B046",
  red: "#F53C3C",
  white: "#FFFFFF",
};

export const shadows = {
  shadow1:
    "0px 0px 1px 1px rgba(53, 124, 173, 0.2), 0px 6px 14px 2px rgba(53, 124, 173, 0.06)",
};

export const fontTypes = {
  heading: ` font-family:Helvetica, sans-serif Bold; font-size: 24; line-height: 33.6px;`,
  body: `font-family: Helvetica, sans-serif Regular; font-size: 16; font-weight: 600; line-height: 22.4px;`,
  subtitle: `font-family: Helvetica, sans-serif Bold; font-size: 14; font-weight: 700; line-height: 22.4px;`,
};

const theme: StyledDefaultTheme = {
  colors: themeColors,
  shadows,
  fontTypes,
  spacing: (number) => number * 8,
};

export default theme;
