import React from "react";
import { render, screen } from "@testing-library/react";
import CenterNotice from "../CenterNotice";
import sty from "../CenterNotice.module.css";

describe("CenterNotice", () => {
  it("should renders the title prop correctly", () => {
    const title = <h1>Test Title</h1>;
    render(<CenterNotice title={title} />);

    const element = screen.getByText("Test Title");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("H1");
  });

  it("should applies the correct class name", () => {
    const title = <h1>Test Title</h1>;
    const { container } = render(<CenterNotice title={title} />);

    const divElement = container.firstChild;
    expect(divElement).toHaveClass(sty.centerNoticeContainer);
  });
});
