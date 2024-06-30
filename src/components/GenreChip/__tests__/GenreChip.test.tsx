import React from "react";
import { render, screen } from "@testing-library/react";
import GenreChip from "../GenreChip";
import sty from "../GenreChip.module.css";

describe("GenreChip", () => {
  it("should renders the name prop correctly", () => {
    render(<GenreChip name="Action" />);

    const element = screen.getByText("Action");
    expect(element).toBeInTheDocument();
  });

  it("should applies the default background color when no backgroundColor prop is provided", () => {
    const { container } = render(<GenreChip name="Action" />);

    const divElement = container.firstChild;
    expect(divElement).toHaveStyle({ background: "yellow" });
  });

  it("should applies the given background color", () => {
    const { container } = render(
      <GenreChip name="Action" backgroundColor="red" />,
    );

    const divElement = container.firstChild;
    expect(divElement).toHaveStyle({ background: "red" });
  });

  it("should applies the correct class name", () => {
    const { container } = render(<GenreChip name="Action" />);

    const divElement = container.firstChild;
    expect(divElement).toHaveClass(sty.chipContainer);
  });
});
