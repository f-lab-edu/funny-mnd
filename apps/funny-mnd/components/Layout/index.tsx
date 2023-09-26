import type { PropsWithChildren } from "react";
import Header from "./Header";
import { layoutStyle, wrapperStyle } from "@/styles/components/layout.css";

type LayoutParam = PropsWithChildren;

const Layout: React.FC<LayoutParam> = ({ children }) => {
  return (
    <section className={layoutStyle}>
      <Header />
      <div className={wrapperStyle}>{children}</div>
    </section>
  );
};

export default Layout;
