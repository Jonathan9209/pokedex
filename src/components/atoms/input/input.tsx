import { FC, ReactNode } from "react";
import "./input.scss";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  if (placeholder) inputClasses += " input--placeholder;" 


  return (
    <div className="input">
      {iconLeft && <div className="input__icon-left">{iconLeft}</div>}

      <input
        className={`input ${inputClasses}`}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
