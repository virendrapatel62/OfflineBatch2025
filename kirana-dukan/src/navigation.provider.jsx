import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page/home.page";
import Navbar from "./components/navbar/navbar.component";
import LoginPage from "./pages/login-page/login.page";
import RegisterPage from "./pages/register-page/register.page";
import ProductDetailsPage from "./pages/product-details/products-details.page";
import CheckoutPage from "./pages/checkout-page/checkout.page";
import OrdersPage from "./pages/orders-page/orders.page";
import ProfilePage from "./pages/profile-page/profile.page";
import { useAuth } from "./stores/auth.store";
import { Urls } from "./constants/urls";
import { useRecoilState } from "recoil";
import { authStore as authStoreAtom } from "./stores/auth.store";
import axios from "axios";
import DashboardPage from "./pages/dashboard/dashboard-page";

function AuthenticatedRoutes({ children }) {
  const auth = useAuth();

  const pathname = window.location.pathname;

  if (!auth.isAuthenticated) {
    return <Navigate to={`/login?returnTo=${pathname}`} />;
  }

  return <>{children}</>;
}

export default function NaviationProvider() {
  const [authStore, setAuthStore] = useRecoilState(authStoreAtom);

  useEffect(() => {
    axios
      .get(Urls.profile, {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      })
      .then((res) => {
        const user = res.data;

        console.log(user);

        setAuthStore({
          ...authStore,
          user,
        });

        authStore.persist(user, authStore.token);
      });
  }, [authStore.token]);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticatedRoutes>
              <CheckoutPage />
            </AuthenticatedRoutes>
          }
        />

        <Route
          path="/orders"
          element={
            <AuthenticatedRoutes>
              <OrdersPage />
            </AuthenticatedRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <AuthenticatedRoutes>
              <ProfilePage />
            </AuthenticatedRoutes>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AuthenticatedRoutes>
              <DashboardPage />
            </AuthenticatedRoutes>
          }
        >
          <Route path="" element={<Navigate to="products" />} />
          <Route path="products" element={<h1>Products</h1>} />
          <Route path="orders" element={<h1>Orders</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
        </Route>
      </Routes>
    </Fragment>
  );
}
