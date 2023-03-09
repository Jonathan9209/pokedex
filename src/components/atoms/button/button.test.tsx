import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./button";


describe("Button test", () => {
  it("Should render the button", () => {
    render(<Button onClick={() => {}}>Agregar</Button>);

    const button = screen.getByText("Agregar");

    expect(button).toBeInTheDocument();
  });
  

  it("Should render the button with the class button--icon", () => {
      render(
      <Button isIcon onClick={() => {}}>
        Text
      </Button>
      );

      const button = screen.getByRole("button");

      expect(button).toHaveClass("button--icon");    
  });
  
  it("Should render the button with the class button--disabled", () => {
      render(
      <Button disabled onClick={() => {}}>
        Text
      </Button>
      );

      const button = screen.getByRole("button");

      expect(button).toHaveClass("button--disabled");    
  });

  it("Should render the button with ornamentLeft", () => {
      render(
      <Button ornamentLeft onClick={() => {}}>
        Text
      </Button>
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();    
  });

it("Should execute onClick when the button is clicked", async () => {
    const mockOnClik = jest.fn();

    render(
      <Button type="secondary" onClick={mockOnClik}>
        Aceptar
      </Button>
    );
    const button = screen.getByText("Aceptar");

    await userEvent.click(button);

    expect(mockOnClik).toBeCalled();
  });

  it("should have a primary class", () => {
    render(<Button type="primary" onClick={() => {}}>Text</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button--primary");
  });
  
  it("should have a secondary class", () => {
    render(<Button type="secondary" onClick={() => {}}>Text</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button--secondary");
  });
  

});



