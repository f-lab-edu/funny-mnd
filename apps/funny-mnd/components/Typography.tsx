import { PropsWithChildren } from "react";

interface TypographyParam
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLParagraphElement> {}

const Typography: React.FC<TypographyParam> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};

export default Typography;
