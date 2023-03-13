import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./table";

test("Should table render", () => {
    const { getByText } = render(<Table rows={[]} />);
    expect(getByText("Ivasaur")).toBeInTheDocument();
  });