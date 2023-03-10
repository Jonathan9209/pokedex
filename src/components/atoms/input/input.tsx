import { FC, ReactNode } from "react";
import "./input.scss";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => void;
  iconLeft?: ReactNode;
}

const Input: FC<InputProps> = ({
  placeholder = "Text",
  value,
  onChange,
  iconLeft,
}) => {

  let inputClasses = "input";
  if (iconLeft) inputClasses += " input--icon";

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    onChange?.(text);
  };

  return (
    <div className="input">
      {iconLeft && <div className="input__icon-left">{iconLeft}</div>}

      <input
        className={`input ${inputClasses}`}
        onChange={handleOnChange}
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
