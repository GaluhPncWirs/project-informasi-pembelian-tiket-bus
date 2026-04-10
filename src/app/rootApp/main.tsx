import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Beranda from "../Beranda/page.tsx";
import JadwalBus from "../DaftarTiketBus/JadwalBus/page.tsx";
import DetailTiketBus from "../DaftarTiketBus/DetailTiketBus/page.tsx";
import TentangKami from "../TentangKami/page.tsx";

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
    path: "/DaftarTiketBus",
    children: [
      {
        index: true,
        element: <JadwalBus />,
      },
      {
        path: "Detail/:idTiketBus",
        element: <DetailTiketBus />,
      },
    ],
  },
  {
    path: "/TentangKami",
    element: <TentangKami />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
