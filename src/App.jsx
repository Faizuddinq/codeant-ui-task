import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";

import Sidebar from "./components/Sidebar";
import Repositories from "./components/Repositories";
import { Auth } from "./components/auth/Auth";
import SAAS from "./components/auth/SAAS";
import Self from "./components/auth/Self";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/auth/saas" replace />, // Redirect "/" to "/auth"
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "saas",
          element: <SAAS />,
        },
        {
          path: "self-hosted",
          element: <Self />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "repositories",
          element: <Repositories />,
        },
        {
          path: "code-review",
          element: <NotFound />,
        },
        {
          path: "cloud-security",
          element: <NotFound />,
        },
        {
          path: "how-to-use",
          element: <NotFound />,
        },
        {
          path: "settings",
          element: <NotFound />,
        },
        {
          path: "report",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
