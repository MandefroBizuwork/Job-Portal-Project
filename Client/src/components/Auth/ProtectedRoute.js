import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Assuming token is stored in local storage

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" />;
  }

  return children; // Render the children if authenticated
};

export default ProtectedRoute;