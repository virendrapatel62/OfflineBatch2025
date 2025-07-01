import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
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
        <Route
          path="/"
          element={
            <AuthenticatedRoutes>
              <HomePage />
            </AuthenticatedRoutes>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/product/:id"
          element={
            <AuthenticatedRoutes>
              <ProductDetailsPage />
            </AuthenticatedRoutes>
          }
        />
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
        />
      </Routes>
    </Fragment>
  );
}
