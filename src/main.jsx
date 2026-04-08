import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavPageExprience from "./(components)/NavPages/NavExpPage/NavPageExprience.jsx";
import MainpageNavigationLayout from "./(components)/Layouts/MainpageNavigationLayout.jsx";
import TourDetails from "./(components)/NavPages/NavExpPage/_components/TourDetails.jsx";
import NavFnqPage from "./(components)/NavPages/NavFnQPage/NavFnqPage.jsx";
import PrivateTours from "./(components)/NavPages/PrivateTours/PrivateTours.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <MainpageNavigationLayout />,
    children: [
      {
        path: "/exprience",
        element: <NavPageExprience />,
      },
      {
        path: "/exprience/tour/:id",
        element: <TourDetails />,
      },
      {
        path: "/fnq",
        element: <NavFnqPage />,
      },
      {
        path: "/private-tours",
        element: <PrivateTours />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
