import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import EducationAndAwareness from "./pages/EducationAndAwareness.tsx";
import Dummy from "./pages/Dummy.tsx";
import Register from "./pages/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "education-and-awareness",
        element: <EducationAndAwareness />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dummy",
    element: <Dummy />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
