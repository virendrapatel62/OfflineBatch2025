import { createContext, useContext } from "react";

const AuthContext = createContext({
  user: null,
});

export function useUser() {
  const { user } = useContext(AuthContext);
  return user;
}

function AuthContextProvider(props) {
  const value = {
    user: {
      firstName: "Virat",
      lastName: "Kohli",
      email: "virat@gmail.com",
      age: 32,
      city: "Mumbai",
      country: "India",
      isAdmin: true,
    },
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
