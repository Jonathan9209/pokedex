import { FC } from "react";


export interface LabelProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: boolean;
}

const Label: FC<LabelProps> = ({
  name,
 
}) => {
  return (
    <div className="label">
      <label htmlFor={name} className="label__name">
        {name}
      </label>
    </div>
  );
};

export default Label;