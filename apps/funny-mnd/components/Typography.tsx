import { forwardRef } from "react";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { typographyStyle } from "@/styles/components/typography.css";

export type Combine<T, K> = T & Omit<K, keyof T>;

export type CombineElementProps<T extends ElementType, K = unknown> = Combine<
  K,
  ComponentPropsWithoutRef<T>
>;

type OverridableProps<T extends ElementType, K = unknown> = {
  as?: T;
  theme?: string;
} & CombineElementProps<T, K>;

type TextProps<T extends ElementType> = PropsWithChildren<OverridableProps<T>>;

function Typography<T extends ElementType = "span">(
  { children, as, theme, ...props }: TextProps<T>,
  ref: React.Ref<never>
) {
  const target = as ?? "span";
  const Component = target;
  const themeName = theme ? typographyStyle[theme] : "";

  return (
    <Component className={themeName} ref={ref} {...props}>
      {children}
    </Component>
  );
}

export default forwardRef(Typography) as typeof Typography;
