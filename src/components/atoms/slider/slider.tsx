import { FC } from "react";
import "./slider.scss";

interface SliderProps {
  name: string;
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ name, value, onChange, min, max }) => {
  return (
    <div className="slider">
      <label className="name" htmlFor="{name}">
        {name}
        {": "}
      </label>
      <div className="">
        {typeof min === "number" && (
          <span className="slider--range">{min}</span>
        )}
        <input
          //`
          className={"input"}
          type="range"
          name={name}
          id={name}
          data-testid={name}
          min={min}
          max={max}
          value={value}
          onChange={
            onChange ? (e) => onChange(Number(e.target.value)) : undefined
          }
        />

        {typeof max === "number" && (
          <span className="slider--range">{max}</span>
        )}
      </div>
    </div>
  );
};

export default Slider;
