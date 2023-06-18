import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ProjectLayout from "../layouts/ProjectLayout";
import AllMyProjects from "../pages/AllMyProjects/AllMyProjects";
import SingleProject from "../pages/SingleProject/SingleProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/projects",
    element: <ProjectLayout />,
    children: [
      {
        path: "/projects",
        element: <AllMyProjects />,
      },
      {
        path: "/projects/:slug",
        element: <SingleProject />,
      },
    ],
  },
]);

export default router;
