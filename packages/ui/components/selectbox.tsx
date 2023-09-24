import { PropsWithChildren, useState } from "react";
import { Typography, CloseBoxOnOutside } from ".";
import {
  selectBoxButtonStyle,
  selectBoxCloseSideStyle,
  selectBoxInputStyle,
  selectBoxItemStyle,
  selectBoxListStyle,
} from "./selectbox.css";

interface SelectBoxProps {
  value: string;
  items: string[];
  onClick: (item: string) => void;
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  value,
  items,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelectBox = () => setIsOpen(!isOpen);
  const closeSelectBox = () => setIsOpen(false);

  const onClickAfterCloseSelectBox = (item: string) => {
    onClick(item);
    closeSelectBox();
  };

  return (
    <CloseBoxOnOutside
      className={`space-y-1 ${selectBoxCloseSideStyle}`}
      onClose={closeSelectBox}
    >
      <button
        className={selectBoxButtonStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography className={selectBoxInputStyle}>{value}</Typography>
        <img
          className={`${isOpen ? "rotate-180" : ""}`}
          src={"/images/btn_expand.svg"}
          alt="Select Toggle"
          width={12}
          height={12}
          onClick={toggleSelectBox}
        />
      </button>
      <div className={`${!isOpen && "invisible"} ${selectBoxListStyle}`}>
        {items.map((item) => (
          <button
            key={item}
            role="button"
            className={`${selectBoxItemStyle} space-x-2`}
            onClick={() => onClickAfterCloseSelectBox(item)}
          >
            <Typography theme="base400">{item}</Typography>
            {value === item && (
              <img
                src={"/images/ic-v2-done.png"}
                alt="selected"
                width={20}
                height={20}
              />
            )}
          </button>
        ))}
      </div>
    </CloseBoxOnOutside>
  );
};
