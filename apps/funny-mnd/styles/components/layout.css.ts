import { style } from "@vanilla-extract/css";
import colors from "ui/styles/source/colors";

export const layoutStyle = style({
  minHeight: "100vh",
  backgroundColor: colors.white,
  paddingTop: 52,
});

export const headerStyle = style({
  height: 52,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.lime[700],
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 20,
});

export const wrapperStyle = style({
  padding: "8px 12px",
});

export const titleBoxStyle = style({
  paddingTop: 20,
  paddingBottom: 20,
});

export const headerWrapperStyle = style({});
