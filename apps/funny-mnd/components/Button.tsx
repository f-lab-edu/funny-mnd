import { buttonStyle } from "@/styles/components/button.css";
import { PropsWithChildren } from "react";

interface ButtonParam extends PropsWithChildren {
  theme: keyof typeof buttonStyle;
}

const Button: React.FC<ButtonParam> = ({ children, theme }) => {
  return <button className={buttonStyle[theme]}>{children}</button>;
};

export default Button;
