import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppState } from "../../App";
const RedirectingAuthenticated = ({ children }) => {
  const {user} = useContext(AppState)
  
const isLogedin=!!user
  if (isLogedin) {
    // If no token, redirect to login
    return <Navigate to="/dashboard" />;
  }

  return children; // Render the children if authenticated
};

export default RedirectingAuthenticated;