import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPage from "../LandingPage/page.tsx";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/LandingPage"),
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
