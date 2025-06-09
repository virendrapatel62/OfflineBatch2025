import React from "react";
import AuthContextProvider from "./Auth/AuthContext";
import UserProfile from "./UserProfile";
import EventBubblingDemo from "./EventBubblingDemo";
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );

  return (
    <AuthContextProvider>
      <h1>App</h1>
      <UserProfile />
      <EventBubblingDemo />
    </AuthContextProvider>
  );
}
