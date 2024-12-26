import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";

import Sidebar from "./components/Sidebar";
import Repositories from "./components/Repositories";
import { Auth} from "./components/auth/Auth";
import SAAS from './components/auth/SAAS'
import Self from './components/auth/Self'
import NotFOund from "./components/NotFound";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="flex flex-col md:flex-row ">
            <Sidebar />
            <div
              className={`absolute w-full md:relative md:w-[88%] md:top-0 top-[5rem]`}
            >
              <Repositories />
            </div>
          </div>
        </>
      ),
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
          element: <NotFOund />,
        },
        {
          path: "cloud-security",
          element: <NotFOund />,
        },
        {
          path: "how-to-use",
          element: <NotFOund />,
        },
        {
          path: "settings",
          element: <NotFOund />,
        },
        {
          path: "report",
          element: <NotFOund />,
        },
  
      ],
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
   
  ]);

  return (
    <>
      
        <RouterProvider router={router}></RouterProvider>
     
    </>
  );
}

export default App;
