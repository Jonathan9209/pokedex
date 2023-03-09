import { FC, ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  children?: ReactNode;
  type?: "primary" | "secondary";
  isIcon?: boolean;
  onClick: () => void;
  ornamentLeft?: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, type, isIcon, onClick, ornamentLeft, disabled = false,}) => {
 
    let buttonClasses = "button";
    if(type === "primary") buttonClasses += " button--primary"; 
    if(type === "secondary") buttonClasses += " button--secondary";   
    if(isIcon) buttonClasses += " button--icon";
    if(disabled) buttonClasses += " button--disabled";

    
  return (
    <div>
    <button className={`button button--${buttonClasses}`} onClick={onClick}>
      {ornamentLeft && ornamentLeft}
      {children}
    </button>
    </div>
  );
};

export default Button;