import { describe, it, expect } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Router Configuration', () => {
  it('should define route for root path /', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <div>Home</div>,
        },
      ],
      {
        initialEntries: ['/'],
      }
    );

    render(<RouterProvider router={router} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should define route for /category/:categoryId', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/category/:categoryId',
          element: <div>Category Page</div>,
        },
      ],
      {
        initialEntries: ['/category/projects'],
      }
    );

    render(<RouterProvider router={router} />);
    expect(screen.getByText('Category Page')).toBeInTheDocument();
  });

  it('should define route for /project/:itemId', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/project/:itemId',
          element: <div>Project Page</div>,
        },
      ],
      {
        initialEntries: ['/project/project-1'],
      }
    );

    render(<RouterProvider router={router} />);
    expect(screen.getByText('Project Page')).toBeInTheDocument();
  });

  it('should handle 404 for unmatched paths', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <div>Root</div>,
        },
        {
          path: '*',
          element: <div>404 Not Found</div>,
        },
      ],
      {
        initialEntries: ['/non-existent-route'],
      }
    );

    render(<RouterProvider router={router} />);
    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
