import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./input";

describe("Input test", () => {
  it("Should render Input", () => {
    render(<Input />);

    const input = screen.getByPlaceholderText("Text");

    expect(input).toBeInTheDocument();
  });

  it("Should render Input with custom placeholder", () => {
    render(<Input placeholder="Buscar" />);

    const input = screen.getByPlaceholderText("Buscar");

    expect(input).toBeInTheDocument();
  });

  it("Should render Input", () => {
    render(<Input iconLeft/>);

    const input = screen.getByPlaceholderText("Text");
    expect(input).toHaveClass("input--prueba");
  });

  it("Should render Input with value", () => {
    render(<Input value="Valor" />);

    const input = screen.getByDisplayValue("Valor");
    expect(input).toBeInTheDocument();
  });

  it("Should execute onChange", async () => {
    const mockOnChange = jest.fn();

    render(<Input onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Text");

    await userEvent.type(input, "Valor");

    expect(mockOnChange).toBeCalledWith("Valor");
  });

//   it("should call onChange", () => {
//     const onChange = jest.fn();
//     render(<Input onChange={onChange} />);
//     const input = screen.getByRole("textbox");
//     expect(onChange).toBeCalledTimes(0);
//     act(() => {
//       fireEvent.input(input, "t");
//     });
//     // expect(onChange).toBeCalledTimes(1);
//   });
});