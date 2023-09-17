import { layoutStyle, wrapperStyle } from "@/styles/components/layout.css";
import { PropsWithChildren } from "react";
import Header from "./Header";

interface LayoutParam extends PropsWithChildren {}

const Layout: React.FC<LayoutParam> = ({ children }) => {
  return (
    <section className={layoutStyle}>
      <Header />
      <div className={wrapperStyle}>{children}</div>
    </section>
  );
};

export default Layout;
