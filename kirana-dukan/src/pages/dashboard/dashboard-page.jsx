import React from "react";
import { useRecoilState } from "recoil";
import {
  authStore as authStoreAtom,
  useIsSeller,
} from "../../stores/auth.store";
import { Navigate } from "react-router-dom";

export default function DashboardPage() {
  const isSeller = useIsSeller();

  if (!isSeller) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  );
}
