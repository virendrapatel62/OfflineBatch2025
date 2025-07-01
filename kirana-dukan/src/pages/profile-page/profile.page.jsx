import React from "react";
import { useAuth, useUser } from "../../stores/auth.store";
import { Navigate } from "react-router-dom";

export default function ProfilePage() {
  const user = useUser();

  return (
    <div className="container mx-auto">
      <div className="py-4 border-b border-gray-200 mb-4">
        <div className="text-center h-40 flex flex-col items-center justify-center">
          <h2 className="text-5xl">Welcome {user?.name}</h2>

          <h3>{user?.role}</h3>
        </div>
      </div>
    </div>
  );
}
