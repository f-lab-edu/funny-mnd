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
  fontSize: fontSize.micro,
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

export const textLeft = style({
  textAlign: "left",
});

export const textCenter = style({
  textAlign: "center",
});

export const textRight = style({
  textAlign: "right",
});

const typographyStylebasic = {
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
};

export const typographyStyle = styleVariants({
  ...typographyStylebasic,
  "micro400 textLeft": [...typographyStylebasic.micro400, textLeft],
  "micro700 textLeft": [...typographyStylebasic.micro700, textLeft],
  "micro900 textLeft": [...typographyStylebasic.micro900, textLeft],
  "small400 textLeft": [...typographyStylebasic.small400, textLeft],
  "small700 textLeft": [...typographyStylebasic.small700, textLeft],
  "small900 textLeft": [...typographyStylebasic.small900, textLeft],
  "base400 textLeft": [...typographyStylebasic.base400, textLeft],
  "base700 textLeft": [...typographyStylebasic.base700, textLeft],
  "base900 textLeft": [...typographyStylebasic.base900, textLeft],
  "large400 textLeft": [...typographyStylebasic.large400, textLeft],
  "large700 textLeft": [...typographyStylebasic.large700, textLeft],
  "large900 textLeft": [...typographyStylebasic.large900, textLeft],
  "xlarge400 textLeft": [...typographyStylebasic.xlarge900, textLeft],
  "xlarge700 textLeft": [...typographyStylebasic.xlarge400, textLeft],
  "xlarge800 textLeft": [...typographyStylebasic.xlarge700, textLeft],
  "micro400 textCenter": [...typographyStylebasic.micro400, textCenter],
  "micro700 textCenter": [...typographyStylebasic.micro700, textCenter],
  "micro900 textCenter": [...typographyStylebasic.micro900, textCenter],
  "small400 textCenter": [...typographyStylebasic.small400, textCenter],
  "small700 textCenter": [...typographyStylebasic.small700, textCenter],
  "small900 textCenter": [...typographyStylebasic.small900, textCenter],
  "base400 textCenter": [...typographyStylebasic.base400, textCenter],
  "base700 textCenter": [...typographyStylebasic.base700, textCenter],
  "base900 textCenter": [...typographyStylebasic.base900, textCenter],
  "large400 textCenter": [...typographyStylebasic.large400, textCenter],
  "large700 textCenter": [...typographyStylebasic.large700, textCenter],
  "large900 textCenter": [...typographyStylebasic.large900, textCenter],
  "xlarge400 textCenter": [...typographyStylebasic.xlarge900, textCenter],
  "xlarge700 textCenter": [...typographyStylebasic.xlarge400, textCenter],
  "xlarge800 textCenter": [...typographyStylebasic.xlarge700, textCenter],
  "micro400 textRight": [...typographyStylebasic.micro400, textRight],
  "micro700 textRight": [...typographyStylebasic.micro700, textRight],
  "micro900 textRight": [...typographyStylebasic.micro900, textRight],
  "small400 textRight": [...typographyStylebasic.small400, textRight],
  "small700 textRight": [...typographyStylebasic.small700, textRight],
  "small900 textRight": [...typographyStylebasic.small900, textRight],
  "base400 textRight": [...typographyStylebasic.base400, textRight],
  "base700 textRight": [...typographyStylebasic.base700, textRight],
  "base900 textRight": [...typographyStylebasic.base900, textRight],
  "large400 textRight": [...typographyStylebasic.large400, textRight],
  "large700 textRight": [...typographyStylebasic.large700, textRight],
  "large900 textRight": [...typographyStylebasic.large900, textRight],
  "xlarge400 textRight": [...typographyStylebasic.xlarge900, textRight],
  "xlarge700 textRight": [...typographyStylebasic.xlarge400, textRight],
  "xlarge800 textRight": [...typographyStylebasic.xlarge700, textRight],
});
