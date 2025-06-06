import React from "react";
import AuthContextProvider from "./Auth/AuthContext";
import UserProfile from "./UserProfile";
import EventBubblingDemo from "./EventBubblingDemo";

export default function App() {
  return (
    <AuthContextProvider>
      <h1>App</h1>
      <UserProfile />
      <EventBubblingDemo />
    </AuthContextProvider>
  );
}
