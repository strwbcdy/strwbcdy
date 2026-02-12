import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './HeroSection';
import { HeroContent } from 'src/types/Portfolio';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockHeroContent: HeroContent = {
  name: "Test User",
  title: "Test Developer",
  summary: "This is a test summary for the hero section",
  backgroundImage: "/images/test-bg.jpg",
  ctaButtons: {
    primary: { label: "View Projects", action: "/category/projects" },
    secondary: { label: "About Me", action: "/about" }
  }
};

describe('HeroSection', () => {
  it('should render hero content with name, title, and summary', () => {
    render(
      <BrowserRouter>
        <HeroSection heroContent={mockHeroContent} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Test Developer')).toBeInTheDocument();
    expect(screen.getByText('This is a test summary for the hero section')).toBeInTheDocument();
  });

  it('should render CTA buttons with correct labels', () => {
    render(
      <BrowserRouter>
        <HeroSection heroContent={mockHeroContent} />
      </BrowserRouter>
    );

    expect(screen.getByRole('button', { name: 'View Projects' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'About Me' })).toBeInTheDocument();
  });

  it('should navigate to correct route when primary CTA is clicked', () => {
    render(
      <BrowserRouter>
        <HeroSection heroContent={mockHeroContent} />
      </BrowserRouter>
    );

    const primaryButton = screen.getByRole('button', { name: 'View Projects' });
    fireEvent.click(primaryButton);

    expect(mockNavigate).toHaveBeenCalledWith('/category/projects');
  });

  it('should navigate to correct route when secondary CTA is clicked', () => {
    render(
      <BrowserRouter>
        <HeroSection heroContent={mockHeroContent} />
      </BrowserRouter>
    );

    const secondaryButton = screen.getByRole('button', { name: 'About Me' });
    fireEvent.click(secondaryButton);

    expect(mockNavigate).toHaveBeenCalledWith('/about');
  });

  it('should render background image with correct src', () => {
    render(
      <BrowserRouter>
        <HeroSection heroContent={mockHeroContent} />
      </BrowserRouter>
    );

    const backgroundImage = screen.getByAltText('Test User');
    expect(backgroundImage).toHaveAttribute('src', '/images/test-bg.jpg');
  });
});
