import { style, styleVariants } from "@vanilla-extract/css";

const fontSize = {
  micro: "12px",
  small: "14px",
  base: "16px",
  large: "24px",
  xlarge: "32px",
};

const fontWeight = {
  400: "normal",
  700: "bold",
  900: "bolder",
};

export const microSize = style({
  fontSize: fontSize.base,
});

export const smallSize = style({
  fontSize: fontSize.small,
});

export const baseSize = style({
  fontSize: fontSize.base,
});

export const largeSize = style({
  fontSize: fontSize.large,
});

export const xlargeSize = style({
  fontSize: fontSize.xlarge,
});

export const weight400 = style({
  fontWeight: fontWeight[400],
});

export const weight700 = style({
  fontWeight: fontWeight[700],
});

export const weight900 = style({
  fontWeight: fontWeight[900],
});

export const typographyStyle = styleVariants({
  micro400: [microSize, weight400],
  micro700: [microSize, weight700],
  micro900: [microSize, weight900],
  small400: [smallSize, weight400],
  small700: [smallSize, weight700],
  small900: [smallSize, weight900],
  base400: [baseSize, weight400],
  base700: [baseSize, weight700],
  base900: [baseSize, weight900],
  large400: [largeSize, weight400],
  large700: [largeSize, weight700],
  large900: [largeSize, weight900],
  xlarge400: [xlargeSize, weight400],
  xlarge700: [xlargeSize, weight700],
  xlarge900: [xlargeSize, weight900],
});
