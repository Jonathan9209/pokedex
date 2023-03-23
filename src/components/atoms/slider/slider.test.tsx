import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Slider from "./slider";

describe("Slider test", () => {
  it("should render Slider", () => {
    const { getByText } = render(<Slider />);

    expect(getByText("test:")).toBeInTheDocument();
  });

  it("Should render slider with value", () => {
    const { getByDisplayValue } = render(<Slider value={50} />);
    expect(getByDisplayValue("50")).toBeInTheDocument();
  });

  it("should have a class slider--range", () => {
    render(<Slider max={50}></Slider>);
    const slider = screen.getByText("50");
    expect(slider).toHaveClass("slider--range");
  });

  it("should have a class slider--range", () => {
    render(<Slider min={50} ></Slider>);
    const slider = screen.getByText("50");
    expect(slider).toHaveClass("slider--range");
  });

  it("should execute external function", async () => {
    const mockOnChange = jest.fn();

    render(<Slider  onChange={mockOnChange} />);

    const element = screen.getByTestId("test");

    fireEvent.change(element, { target: { value: 5 } });

    expect(mockOnChange).toBeCalled();
  });
});
