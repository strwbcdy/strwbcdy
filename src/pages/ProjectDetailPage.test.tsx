import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Component as ProjectDetailPage } from './ProjectDetailPage';

// Mock the hooks and components
vi.mock('src/hooks/usePortfolioData', () => ({
  usePortfolioData: () => ({
    getItemById: (id: string) => {
      if (id === 'project-1') {
        return {
          id: 'project-1',
          title: 'Test Project',
          description: 'A test project description',
          image: '/images/test.jpg',
          tags: ['React', 'TypeScript'],
          category: 'project',
          videoUrl: '/videos/test.mp4',
        };
      }
      if (id === 'project-no-video') {
        return {
          id: 'project-no-video',
          title: 'Project Without Video',
          description: 'A project without video',
          image: '/images/test.jpg',
          tags: ['React'],
          category: 'project',
        };
      }
      return undefined;
    },
  }),
}));

vi.mock('src/hooks/useWindowSize', () => ({
  default: () => ({ width: 1920, height: 1080 }),
}));

vi.mock('src/components/watch/VideoJSPlayer', () => ({
  default: () => <div data-testid="video-player">Video Player</div>,
}));

vi.mock('src/components/watch/VolumeControllers', () => ({
  default: () => <div data-testid="volume-controllers">Volume</div>,
}));

vi.mock('src/components/watch/PlayerSeekbar', () => ({
  default: () => <div data-testid="player-seekbar">Seekbar</div>,
}));

vi.mock('src/components/watch/PlayerControlButton', () => ({
  default: ({ children, onClick }: any) => (
    <button onClick={onClick} data-testid="player-control-button">
      {children}
    </button>
  ),
}));

vi.mock('src/components/MaxLineTypography', () => ({
  default: ({ children }: any) => <div>{children}</div>,
}));

vi.mock('src/components/MainLoadingScreen', () => ({
  default: () => <div>Loading...</div>,
}));

describe('ProjectDetailPage', () => {
  describe('404 handling', () => {
    it('should display 404 page when item is not found', () => {
      render(
        <MemoryRouter initialEntries={['/project/non-existent-id']}>
          <Routes>
            <Route path="/project/:itemId" element={<ProjectDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText('404')).toBeInTheDocument();
      expect(screen.getByText('Project Not Found')).toBeInTheDocument();
      expect(
        screen.getByText(/The project you're looking for doesn't exist/)
      ).toBeInTheDocument();
    });

    it('should have a back button on 404 page', () => {
      render(
        <MemoryRouter initialEntries={['/project/non-existent-id']}>
          <Routes>
            <Route path="/project/:itemId" element={<ProjectDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

      const backButton = screen.getByText('Back to Home');
      expect(backButton).toBeInTheDocument();
    });
  });

  describe('item without video', () => {
    it('should display item details when video is not available', () => {
      render(
        <MemoryRouter initialEntries={['/project/project-no-video']}>
          <Routes>
            <Route path="/project/:itemId" element={<ProjectDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText('Project Without Video')).toBeInTheDocument();
      expect(screen.getByText('A project without video')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(
        screen.getByText(/This project doesn't have a video demo available/)
      ).toBeInTheDocument();
    });
  });

  describe('valid item with video', () => {
    it('should use itemId from route params', () => {
      render(
        <MemoryRouter initialEntries={['/project/project-1']}>
          <Routes>
            <Route path="/project/:itemId" element={<ProjectDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

      // The component should render without 404 error
      expect(screen.queryByText('404')).not.toBeInTheDocument();
    });

    it('should display video player for items with videoUrl', () => {
      render(
        <MemoryRouter initialEntries={['/project/project-1']}>
          <Routes>
            <Route path="/project/:itemId" element={<ProjectDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByTestId('video-player')).toBeInTheDocument();
    });
  });
});
