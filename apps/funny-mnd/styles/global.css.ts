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

globalStyle(".space-y-1 > * + *", {
  marginTop: "0.25rem",
});

globalStyle(".space-y-2 > * + *", {
  marginTop: "0.5rem",
});

globalStyle(".space-x-1 > * + *", {
  marginTop: "0.25rem",
});
