import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Label from "./label";

describe("Label test", () => {
  it("should render label", () => {
      const { getByText } = render(<Label name="test" />);
  
      expect(getByText("test")).toBeInTheDocument();
    });
  });