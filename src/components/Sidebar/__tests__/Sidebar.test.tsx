import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { PropsWithChildren } from "react";

// Mock the Next.js Link component
jest.mock("next/link", () => {
  const MockedLink: React.FC<PropsWithChildren<{ href: string }>> = ({
    children,
    href,
  }) => {
    return <a href={href}>{children}</a>;
  };
  return MockedLink;
});

describe("Sidebar", () => {
  it("should renders correctly with all links", () => {
    const { getByRole, getByText } = render(<Sidebar />);

    // Check if the sidebar container is rendered
    const sidebarContainer = getByRole("navigation");
    expect(sidebarContainer).toBeInTheDocument();

    // Check if the links are rendered correctly
    const homeLink = getByText("H");
    const searchLink = getByText("S");
    const watchlistLink = getByText("W");

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
    expect(searchLink).toBeInTheDocument();
    expect(searchLink).toHaveAttribute("href", "search");
    expect(watchlistLink).toBeInTheDocument();
    expect(watchlistLink).toHaveAttribute("href", "watchlist");
  });
});
