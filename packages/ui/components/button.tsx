import type { PropsWithChildren } from "react/index.js";
import { buttonStyle } from "../styles/button.css";

interface ButtonParam
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: keyof typeof buttonStyle;
}

export const Button: React.FC<ButtonParam> = ({
  children,
  theme,
  ...props
}) => {
  const className = buttonStyle[theme];
  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
};
