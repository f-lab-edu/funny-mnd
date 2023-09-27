import type { PropsWithChildren } from "react";
import { Typography } from "ui/components";
import { labelStyle, rowWrapperStyle } from "@/styles/components/row.css";

export const RowWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={rowWrapperStyle}>{children}</div>
);

export const RowLabel: React.FC<PropsWithChildren> = ({ children }) => (
  <Typography as="span" className={labelStyle}>
    {children}
  </Typography>
);
