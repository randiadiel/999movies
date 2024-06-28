import { render } from "@testing-library/react";
import MovieDolly from "../MovieDolly";

describe("MovieDolly Component", () => {
  it("should render title and children correctly", () => {
    const testTitle = "Test Movie Dolly";
    const { getByText, getByTestId } = render(
      <MovieDolly title={testTitle}>
        <div data-testid="test-child">Child Element</div>
      </MovieDolly>
    );

    const titleElement = getByText(testTitle);
    const childElement = getByTestId("test-child");

    expect(titleElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });
});
