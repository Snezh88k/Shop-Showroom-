import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error_page/ErrorPage";
import MainPage from "./pages/main_page/MainPage";

import { CategoryLoader } from "./loaders/CategoryLoader";

import LoginPage from "./pages/login_page/LoginPage";
import LoginVKPage from "./pages/login_page/LoginVKPage";
import CardProduct from "./components/card_product/CardProduct";
import { ProductLoader } from "./loaders/ProductLoader";
import Message from "./tg-message/Message";
import Favorite from "./components/favorite/Favorite";
import Category from "./components/category/Category";
import Catalog from "./components/catalog/Catalog";
import Instashopping from "./components/instashopping/Instashopping";
import Cart from "./components/cart/Cart";
import ContactPage from "./pages/contact_page/ContactPage";

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
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/catalog/:id",
        loader: CategoryLoader,
        element: <Category />,
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

      {
        path: "/instashopping",
        element: <Instashopping />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
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
