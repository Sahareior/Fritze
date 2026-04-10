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
import HowItWorkPage from "./(components)/NavPages/HowItsWork/HowItWorkPage.jsx";
import NavAboutPage from "./(components)/NavPages/NavAbout/NavAboutPage.jsx";
import NavPress from "./(components)/NavPages/NavPress/NavPress.jsx";
import PressphotoGallary from "./(components)/NavPages/NavPress/pages/PressphotoGallary.jsx";
import PressvideoGallary from "./(components)/NavPages/NavPress/pages/PressvideoGallary.jsx";
import PrivateGroupsPage from "./(components)/NavPages/privateGrpups/PrivateGroupsPage.jsx";
import DashboardLayout from "./(components)/dashboard/DashboardLayout.jsx";
import MyBookings from "./(components)/dashboard/user/MyBookings/MyBookings.jsx";
import ActiveTours from "./(components)/dashboard/user/ActiveTours/ActiveTours.jsx";
import MemoryVault from "./(components)/dashboard/user/MemoryVault/MemoryVault.jsx";
import UserSettings from "./(components)/dashboard/user/Settings/UserSettings.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "user/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "user/active-tours",
        element: <ActiveTours />,
      },
      {
        path: "user/memory-vault",
        element: <MemoryVault />,
      },
      {
        path: "user/settings",
        element: <UserSettings />,
      },
    ],
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
      {
        path: "/how-its-work",
        element: <HowItWorkPage />,
      },
      {
        path: "/about",
        element: <NavAboutPage />,
      },
      {
        path: "/press",
        element: <NavPress />,
      },
      {
        path: "/press/photo-gallery",
        element: <PressphotoGallary />,
      },
      {
        path: "/press/video-gallery",
        element: <PressvideoGallary />,
      },
      {
        path: "/private-groups",
        element: <PrivateGroupsPage />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
