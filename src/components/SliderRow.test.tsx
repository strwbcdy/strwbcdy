import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import SliderRow from "./SliderRow";
import { CategoryConfig, PortfolioCategory, PortfolioItem } from "src/types/Portfolio";
import portfolioReducer from "src/store/slices/portfolioSlice";
import PortalProvider from "src/providers/PortalProvider";
import DetailModalProvider from "src/providers/DetailModalProvider";

const mockStore = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

const mockPortfolioItems: PortfolioItem[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution",
    image: "/images/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: PortfolioCategory.PROJECT,
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Manager",
    description: "A productivity app",
    image: "/images/projects/taskmanager.jpg",
    tags: ["TypeScript", "Redux"],
    category: PortfolioCategory.PROJECT,
  },
];

const mockCategory: CategoryConfig = {
  id: "featured",
  name: "Featured Projects",
  category: PortfolioCategory.PROJECT,
  items: mockPortfolioItems,
};

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <PortalProvider>
          <DetailModalProvider>
            {component}
          </DetailModalProvider>
        </PortalProvider>
      </BrowserRouter>
    </Provider>
  );
};

describe("SliderRow", () => {
  it("renders category name", () => {
    renderWithProviders(<SliderRow category={mockCategory} />);
    expect(screen.getByText(/Featured Projects/)).toBeInTheDocument();
  });

  it("renders portfolio items", () => {
    renderWithProviders(<SliderRow category={mockCategory} />);
    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument();
    expect(screen.getByText("Task Manager")).toBeInTheDocument();
  });

  it("renders explore link with correct path", () => {
    renderWithProviders(<SliderRow category={mockCategory} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/category/featured");
  });

  it("does not render when category has no items", () => {
    const emptyCategory: CategoryConfig = {
      ...mockCategory,
      items: [],
    };
    const { container } = renderWithProviders(<SliderRow category={emptyCategory} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("filters out items without images", () => {
    const categoryWithMissingImage: CategoryConfig = {
      ...mockCategory,
      items: [
        ...mockPortfolioItems,
        {
          id: "project-3",
          title: "No Image Project",
          description: "Project without image",
          image: "",
          tags: ["React"],
          category: PortfolioCategory.PROJECT,
        },
      ],
    };
    renderWithProviders(<SliderRow category={categoryWithMissingImage} />);
    expect(screen.queryByText("No Image Project")).not.toBeInTheDocument();
  });
});
