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
import GuideDashboard from "./(components)/dashboard/guide/GuideDashboard/GuideDashboard.jsx";
import Tourmanegement from "./(components)/dashboard/guide/TourManagement/Tourmanegement.jsx";
import GuideQrCode from "./(components)/dashboard/guide/TourManagement/_components/QuideQrCode.jsx";
import CompleteSteps from "./(components)/dashboard/guide/TourManagement/_components/CompleteSteps.jsx";
import Checkins from "./(components)/dashboard/guide/TourManagement/_components/Checkins.jsx";
import GuideUploadPhotos from "./(components)/dashboard/guide/TourManagement/_components/GuideUploadPhotos.jsx";
import GuidePhotoInfo from "./(components)/dashboard/guide/TourManagement/_components/GuidePhotoInfo.jsx";
import UploadBulkPhotos from "./(components)/dashboard/guide/TourManagement/_components/UploadBulkPhotos.jsx";
import AdminDashoard from "./(components)/dashboard/admin/AdminDashoard.jsx";
import AdminTours from "./(components)/dashboard/admin/Tours/AdminTours.jsx";
import TourCreate from "./(components)/dashboard/admin/Tours/_components/TourCreate/TourCreate.jsx";
import Bookings from "./(components)/dashboard/admin/Bookings/Bookings.jsx";
import AdminMedia from "./(components)/dashboard/admin/Admin_Media/AdminMedia.jsx";
import Guide from "./(components)/dashboard/admin/Guide/Guide.jsx";
import AdminCustomers from "./(components)/dashboard/admin/customers/AdminCustomers.jsx";
import Content from "./(components)/dashboard/admin/Content/Content.jsx";
import GuideProfile from "./(components)/dashboard/guide/Profile/GuideProfile.jsx";
import CameraImageOverlay from "./(components)/dashboard/user/ActiveTours/_components/CameraImageOverlay.jsx";
import AudioPage from "./(components)/dashboard/user/ActiveTours/_components/conditionalPages/AudioPage.jsx";
import VideoPage from "./(components)/dashboard/user/ActiveTours/_components/conditionalPages/VideoPage.jsx";
import ImagePage from "./(components)/dashboard/user/ActiveTours/_components/conditionalPages/ImagePage.jsx";
import UsersImageUpload from "./(components)/dashboard/user/ActiveTours/_components/UsersImageUpload.jsx";


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
        path: "guide/dashboard",
        element: <GuideDashboard />,
      },
      {
        path: "guide/tour-management",
        element: <Tourmanegement />,
      },
      {
        path: "guide/qr-code",
        element: <GuideQrCode />,
      },
      {
        path: "guide/complete-steps",
        element: <CompleteSteps />,
      },
      {
        path: "guide/checkins",
        element: <Checkins />,
      },
      {
        path: "guide/upload-photos",
        element: <GuideUploadPhotos />,
      },
      {
        path: "guide/photo-info",
        element: <GuidePhotoInfo />,
      },
      {
        path: "guide/upload-bulk-photos",
        element: <UploadBulkPhotos />,
      },
      {
        path: "guide/profile",
        element: <GuideProfile />,
      },
      {
        path: "user/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "user/active-tours",
        element: <ActiveTours />,

      },
      {
        path:'user/active-tours/audio',
        element:<AudioPage />
      },
      {
        path:'user/active-tours/video',
        element:<VideoPage />
      },
      {
        path:'user/active-tours/image',
        element:<ImagePage />
      },
      {
        path:'user/active-tours/image-upload',
        element:<UsersImageUpload />
      },
      {
        path:'user/cameraOverlay',
        element:<CameraImageOverlay />
      },
      {
        path: "user/memory-vault",
        element: <MemoryVault />,
      },
      {
        path: "user/settings",
        element: <UserSettings />,
      },
      {
        path:'admin-overview',
        element:<AdminDashoard />
      },
      {
        path:'admin-tours',
        element: <AdminTours />,
        children:[
          {
            path:'create',
            element:<TourCreate />
          }
        ]
      },
      {
        path: 'admin-bookings',
        element: <Bookings />,
      },
      {
        path: 'admin-media',
        element: <AdminMedia />,
      },
      {
        path: 'admin-guide',
        element: <Guide />,
      },
      {
        path: 'admin-customers',
        element: <AdminCustomers />,
      },
      {
        path: 'admin-content',
        element: <Content />,
      }
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
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
