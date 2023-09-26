import { style } from "@vanilla-extract/css";
import colors from "../source/colors";

export const layoutStyle = style({
  minHeight: "100vh",
  backgroundColor: colors.white,
});

export const headerStyle = style({
  height: 52,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.lime[700],
});

export const wrapperStyle = style({
  padding: "8px 12px",
});

export const titleBoxStyle = style({
  paddingTop: 20,
  paddingBottom: 20,
});
