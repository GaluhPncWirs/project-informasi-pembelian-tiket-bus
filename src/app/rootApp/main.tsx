import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Beranda from "../Beranda/page.tsx";
import DaftarBus from "../DaftarBus/page.tsx";

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/Beranda"),
  },
  {
    path: "/Beranda",
    element: <Beranda />,
  },
  {
    path: "/DaftarBus",
    element: <DaftarBus />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
