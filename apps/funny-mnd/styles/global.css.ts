import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("button", {
  border: 0,
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
  display: "inline-block",
});

globalStyle("p, span, h1", {
  margin: 0,
});
