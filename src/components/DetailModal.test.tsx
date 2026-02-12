import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import DetailModal from "./DetailModal";
import { useDetailModal } from "src/providers/DetailModalProvider";
import { PortfolioItem, PortfolioCategory } from "src/types/Portfolio";

// Mock the provider
vi.mock("src/providers/DetailModalProvider", () => ({
  useDetailModal: vi.fn(),
}));

// Mock VideoJSPlayer
vi.mock("./watch/VideoJSPlayer", () => ({
  default: ({ onReady }: any) => {
    // Simulate player ready callback
    if (onReady) {
      onReady({
        muted: () => true,
      });
    }
    return <div data-testid="video-player">Video Player</div>;
  },
}));

describe("DetailModal", () => {
  const mockSetDetailType = vi.fn();

  const mockPortfolioItem: PortfolioItem = {
    id: "project-1",
    title: "Test Project",
    description: "This is a test project description",
    image: "/images/test.jpg",
    tags: ["React", "TypeScript", "Vitest"],
    link: "https://github.com/test/project",
    category: PortfolioCategory.PROJECT,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render nothing when no portfolio item is provided", () => {
    (useDetailModal as any).mockReturnValue({
      detail: {},
      setDetailType: mockSetDetailType,
    });

    const { container } = render(<DetailModal />);
    expect(container.firstChild).toBeNull();
  });

  it("should display portfolio item information", () => {
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: mockPortfolioItem },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a test project description")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Vitest")).toBeInTheDocument();
  });

  it("should display technologies as chips", () => {
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: mockPortfolioItem },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    expect(screen.getByText("Technologies:")).toBeInTheDocument();
    mockPortfolioItem.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("should display link button when link is provided", () => {
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: mockPortfolioItem },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    const linkButton = screen.getByText("View Project").closest("a");
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute("href", "https://github.com/test/project");
    expect(linkButton).toHaveAttribute("target", "_blank");
    expect(linkButton).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should not display link button when link is not provided", () => {
    const itemWithoutLink = { ...mockPortfolioItem, link: undefined };
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: itemWithoutLink },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    expect(screen.queryByText("View Project")).not.toBeInTheDocument();
  });

  it("should display video player when videoUrl is provided", () => {
    const itemWithVideo = {
      ...mockPortfolioItem,
      videoUrl: "https://example.com/video.mp4",
    };
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: itemWithVideo },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    expect(screen.getByTestId("video-player")).toBeInTheDocument();
  });

  it("should display image when videoUrl is not provided", () => {
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: mockPortfolioItem },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    // Check that player is not rendered when no videoUrl
    expect(screen.queryByTestId("video-player")).not.toBeInTheDocument();
    
    // Check that the title is still rendered (modal is open)
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("should display company when provided", () => {
    const itemWithCompany = {
      ...mockPortfolioItem,
      company: "Test Company",
    };
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: itemWithCompany },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    expect(screen.getByText(/Company:/)).toBeInTheDocument();
    expect(screen.getByText(/Test Company/)).toBeInTheDocument();
  });

  it("should display date when provided", () => {
    const itemWithDate = {
      ...mockPortfolioItem,
      date: "2023 - Present",
    };
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: itemWithDate },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    expect(screen.getByText(/Date:/)).toBeInTheDocument();
    expect(screen.getByText(/2023 - Present/)).toBeInTheDocument();
  });

  it("should call setDetailType with undefined when close button is clicked", () => {
    (useDetailModal as any).mockReturnValue({
      detail: { portfolioItem: mockPortfolioItem },
      setDetailType: mockSetDetailType,
    });

    render(<DetailModal />);

    const closeButton = screen.getByRole("button", { name: "" });
    fireEvent.click(closeButton);

    expect(mockSetDetailType).toHaveBeenCalledWith({ id: undefined });
  });
});
