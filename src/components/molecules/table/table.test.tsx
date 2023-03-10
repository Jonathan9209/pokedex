import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./table";

test("If element Table is rendered", () => {
    const { getByText } = render(<Table elements={[]} />);
    expect(getByText("Ivasaur")).toBeInTheDocument();
  });