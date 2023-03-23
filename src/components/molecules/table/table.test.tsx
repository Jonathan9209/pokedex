import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./table";

test("Should table render", () => {
    const { getByText } = render(<Table data={[]} />);
    expect(getByText("Ivasaur")).toBeInTheDocument();
  });