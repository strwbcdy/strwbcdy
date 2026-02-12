import { createBrowserRouter } from "react-router-dom";

import MainLayout from "src/layouts/MainLayout";
import NotFoundPage from "src/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: () => import("src/pages/SelectProfilePage"),
      },
      {
        path: "home",
        lazy: () => import("src/pages/HomePage"),
      },
      {
        path: "employers",
        lazy: () => import("src/pages/EmployersPage"),
      },
      {
        path: "stalkers",
        lazy: () => import("src/pages/StalkersPage"),
      },
      {
        path: "others",
        lazy: () => import("src/pages/OthersPage"),
      },
      {
        path: "browse/:profile",
        lazy: () => import("src/pages/ProfileBrowsePage"),
      },
      {
        path: "about",
        lazy: () => import("src/pages/AboutPage"),
      },
      {
        path: "projects",
        lazy: () => import("src/pages/ProjectsPage"),
      },
      {
        path: "category/:categoryId",
        lazy: () => import("src/pages/CategoryExplore"),
      },
      {
        path: "project/:itemId",
        lazy: () => import("src/pages/ProjectDetailPage"),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});

export default router;
