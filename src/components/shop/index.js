import Home from "./home";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import { LayoutContext } from "./layout";
import { layoutState, layoutReducer } from "./layout/layoutContext";
import { isAdmin, isAuthenticate } from "./auth/fetchApi";
import PageNotFound from "./layout/PageNotFound";
import ProductDetails from "./productDetails";
import ProductByCategory from "./home/ProductByCategory";
import Shop from "./shop";
import AllDoctors from "./doctors/AllDoctors";
import DoctorDetails from "./doctors/DoctorDetails";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Contracts from "./pages/Contracts";

export {
  Home,
  ProtectedRoute,
  AdminProtectedRoute,
  LayoutContext,
  layoutState,
  layoutReducer,
  isAdmin,
  isAuthenticate,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  Shop,
  AllDoctors,
  DoctorDetails,
  Skills,
  Certificates,
  Contracts,
};
