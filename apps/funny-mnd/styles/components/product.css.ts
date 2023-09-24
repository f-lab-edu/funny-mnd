import { style } from "@vanilla-extract/css";
import colors from "ui/styles/source/colors";

export const ProductRowStyle = style({
  display: "flex",
  backgroundColor: colors.green[300],
});

export const ProductIndexStyle = style({
  backgroundColor: colors.green[500],
  width: 32,
  height: 32,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ProductNameStyle = style({
  display: "flex",
  alignItems: "center",
  paddingLeft: 8,
});
