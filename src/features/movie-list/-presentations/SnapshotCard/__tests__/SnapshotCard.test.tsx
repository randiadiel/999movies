import { render, fireEvent, waitFor } from "@testing-library/react";
import SnapshotCard from "../SnapshotCard";

const showHoverDialogMock = jest.fn();

// Mock the useHoverDialogContext hook
jest.mock("@/contexts/HoverDialogContext", () => ({
  useHoverDialogContext: jest.fn(() => ({
    showHoverDialog: showHoverDialogMock,
  })),
}));

describe("SnapshotCard", () => {
  it("should render image and handle hover correctly", async () => {
    const mockImage = {
      src: "https://image.tmdb.org/t/p/original/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      alt: "Test Image",
      width: 300,
      height: 200,
    };
    const { getByAltText } = render(
      <SnapshotCard
        id={1}
        image={mockImage}
        title="Test Title"
        overview="Test Overview"
        voteCount={0}
        backdropPath={""}
        itemType="movie"
        posterPath={""}
        voteAverage={0}
      />,
    );

    const imageElement = getByAltText(mockImage.alt);
    fireEvent.mouseEnter(imageElement);

    // Wait for the hover timeout
    await waitFor(() => {
      expect(showHoverDialogMock).toHaveBeenCalledWith({
        imageProps: mockImage,
        id: 1,
        title: "Test Title",
        overview: "Test Overview",
        top: expect.any(Number),
        left: expect.any(Number),
        voteCount: expect.any(Number),
        backdropPath: "",
        itemType: "movie",
        posterPath: "",
        voteAverage: expect.any(Number),
      });
    });

    fireEvent.mouseLeave(imageElement);
    expect(showHoverDialogMock).toHaveBeenCalledTimes(1);
  });
});
