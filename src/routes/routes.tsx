import Home from "@/pages/Home/Home";
import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Products from "@/pages/Products/Products";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import SuccessPage from "@/pages/SuccessPage/SuccessPage";

const router: any = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/product-management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/success-page",
        element: <SuccessPage></SuccessPage>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default router;
