import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";
import sty from "../SearchBar.module.css";

describe("SearchBar", () => {
  it("should renders the input with the given value", () => {
    render(<SearchBar value="test" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("test");
  });

  it("should calls onChange handler when input value changes", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should applies the correct class names", () => {
    const { container } = render(<SearchBar value="" onChange={() => {}} />);
    const divElement = container.firstChild;
    expect(divElement).toHaveClass(sty.searchBarContainer);
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toHaveClass(sty.searchBarInput);
  });
});
