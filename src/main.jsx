import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Home from "./Home";
import { About } from "./Pages/about/About";
import Activities from "./Pages/Actvities/Activities";
import ActivitiesId from "./Pages/activitiesId/ActivitiesId";
import Category from "./Pages/category/Category";
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
      <Route path="about" element={<About />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/:id" element={<ActivitiesId />} />
      <Route path="activities/category/:id" element={<Category />} />
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
