import React, { PropsWithChildren, useEffect } from "react";

interface ComponentProps extends PropsWithChildren {
  onClose: () => void;
  className?: string;
}

export const CloseBoxOnOutside = ({
  onClose,
  children,
  className,
  ...props
}: ComponentProps) => {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  useCloseBoxOnOutside({ ref: wrapRef, onClose });

  return (
    <div ref={wrapRef} className={className} {...props}>
      {children}
    </div>
  );
};

interface CloseBoxHookProps {
  ref: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

const useCloseBoxOnOutside = ({ ref, onClose }: CloseBoxHookProps) => {
  useEffect(() => {
    let ignoreFirstClick = true;
    const handleClickOutside = (event: MouseEvent) => {
      if (ignoreFirstClick) {
        ignoreFirstClick = false;
        return;
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClose]);
};
