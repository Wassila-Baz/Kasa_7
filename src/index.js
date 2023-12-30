import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import ReactDOM from "react-dom/client";
import Main from "./layout/Main.jsx";
import ApartmentPage from "./pages/AprtPage";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/flat",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);