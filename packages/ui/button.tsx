import type { PropsWithChildren } from "react/index.js";
import { buttonStyle } from "./styles/button.css";

interface ButtonParam extends PropsWithChildren {
  theme: keyof typeof buttonStyle;
}

const Button: React.FC<ButtonParam> = ({ children, theme }) => {
  const className = buttonStyle[theme];
  return (
    <button className={className} type="button">
      {children}
    </button>
  );
};

export default Button;
