import { style } from "@vanilla-extract/css";
import colors from "ui/styles/source/colors";

export const rowWrapperStyle = style({
  padding: "12px 12px",
  border: `solid 1px ${colors.blue[400]}`,
});

export const labelStyle = style({
  width: "60px",
  display: "inline-block",
});
