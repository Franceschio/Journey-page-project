import React from "react";
import Layout from "./components/layout/Layout";
import Home from "./Home";
import { About } from "./Pages/about/About";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.module.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="actvity/:id" element={<h1>Specific activity</h1>} />
        <Route path="city/:id" element={<h1>Specific City</h1>} />
      </Route>
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
