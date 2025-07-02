import React from "react";
import { useIsSeller } from "../../stores/auth.store";
import { Navigate, Link, Outlet } from "react-router-dom";

export default function DashboardPage() {
  const isSeller = useIsSeller();

  if (!isSeller) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container-fluid mx-auto flex p-4 gap-4">
      <div className="w-1/4 border border-gray-300 rounded-md p-4 h-100">
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/dashboard/products">Products</Link>
          </li>
          <li>
            <Link to="/dashboard/orders">Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </div>

      <div id="page-will-replace-here">
        <Outlet />
      </div>
    </div>
  );
}
