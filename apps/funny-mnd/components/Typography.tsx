import type { PropsWithChildren } from "react/index.js";

interface TypographyParam
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLParagraphElement> {}

const Typography: React.FC<TypographyParam> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};

export default Typography;
