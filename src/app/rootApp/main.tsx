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
import DetailTiketBus from "../DaftarBus/DetailTiketBus/page.tsx";

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
    children: [
      {
        index: true,
        element: <DaftarBus />,
      },
      {
        path: "Detail/:idTiketBus",
        element: <DetailTiketBus />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
