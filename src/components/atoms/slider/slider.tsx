import { FC } from "react";
import "./slider.scss";

interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ value, onChange, min, max }) => {
  return (
    <div className="slider">
      {typeof min === "number" && <span className="slider--range">{min}</span>}
      <input
        //`
        className={"input"}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={
          onChange ? (e) => onChange(Number(e.target.value)) : undefined
        }
      />

      {typeof max === "number" && <span className="slider--range">{max}</span>}
    </div>
  );
};

export default Slider;
