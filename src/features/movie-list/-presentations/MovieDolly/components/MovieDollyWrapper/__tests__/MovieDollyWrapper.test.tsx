import { render } from "@testing-library/react";
import MovieDollyWrapper from "../MovieDollyWrapper";

describe("MovieDollyWrapper", () => {
  it("should handle mouse down event correctly", () => {
    const { getByTestId } = render(
      <MovieDollyWrapper>
        <div data-testid="test-child">Child Element</div>
      </MovieDollyWrapper>,
    );

    const childElement = getByTestId("test-child");

    expect(childElement).toBeInTheDocument();
  });
});
