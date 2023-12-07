import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import ApartmentPage from "./pages/ApartmentPage";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,//const HeaderFooterLayout
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/apartment",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
