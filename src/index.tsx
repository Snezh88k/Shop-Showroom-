import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error_page/ErrorPage";
import MainPage from "./pages/main_page/MainPage";

import { CategoryLoader } from "./loaders/CategoryLoader";
import Catalog from "./components/catalog/Catalog";
import LoginPage from "./pages/login_page/LoginPage";
import LoginVKPage from "./pages/login_page/LoginVKPage";
import CardProduct from "./components/card_product/CardProduct";
import { ProductLoader } from "./loaders/ProductLoader";
import Message from "./tg-message/Message";
import Favorite from "./components/favorite/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/category/:id",
        loader: CategoryLoader,
        element: <Catalog />,
      },
      {
        path: "/favotite",
        element: <Favorite />,
      },
      {
        path: "/auth",
        element: <LoginPage />,
      },
      {
        path: "/authVK",
        element: <LoginVKPage />,
      },

      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/product/:id",
        loader: ProductLoader,
        element: <CardProduct />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="64086974939-oijgmdetcv1c9a6envjks8qoov02adgp.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
