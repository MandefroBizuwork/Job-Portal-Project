import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppState } from "../../App";

const ProtectedRoute = ({ children }) => {
 
const token=localStorage.getItem
  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" />;
  }

  return children; // Render the children if authenticated
};

export default ProtectedRoute;