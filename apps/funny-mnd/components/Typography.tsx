import { forwardRef } from "react";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

export type Combine<T, K> = T & Omit<K, keyof T>;

export type CombineElementProps<T extends ElementType, K = unknown> = Combine<
  K,
  ComponentPropsWithoutRef<T>
>;

type OverridableProps<T extends ElementType, K = unknown> = {
  as?: T;
} & CombineElementProps<T, K>;

type TextProps<T extends ElementType> = PropsWithChildren<OverridableProps<T>>;

function Typography<T extends ElementType = "span">(
  { children, as, ...props }: TextProps<T>,
  ref: React.Ref<never>
) {
  const target = as ?? "span";
  const Component = target;

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
}

export default forwardRef(Typography) as typeof Typography;
