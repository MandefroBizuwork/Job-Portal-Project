import "./Css/bootstrap-5/css/bootstrap.min.css";
import "./Css/font-awesome-4.7/css/font-awesome.min.css";
import "./Css/mystyle.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState, useMemo } from "react";
import AOS from 'aos'; // AOS JavaScript

// Import Components
import Index from "./components/Pages/Main/Index";
import Register from "./components/Pages/UserPage/Register";
import Login from "./components/Pages/UserPage/Login";
import CommonLayout from "./components/Pages/SharedLayout/CommonLayout";
import Fouro4 from "./components/ErorrPage/Fouro4";
import PostJob from "./components/Pages/JobPage/PostJob";
import ManageJob from "./components/Pages/JobPage/ManageJob";
import UpdateJob from "./components/Pages/JobPage/UpdateJob";
import Email from "./components/Confirmaion/Email";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Documents from "./components/Documents/Documents";
import Profile from "./components/Pages/DashBoard/Profile";
import AdminLayout from "./components/Pages/DashBoard/AdminLayout/AdminLayout";
import Jobs from "./components/Pages/DashBoard/Jobs";
import DashboardPage from "./components/Pages/DashBoard/NewAdminHeader/DashboardPage";
import RedirectingAuthenticated from "./components/Auth/RedirectingAuthenticated";

export const AppState = createContext();

function App() {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/user/checkuser", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error("Failed to fetch user:", response.status);
      }
    } catch (err) {
      console.error("Error loading user:", err.message);
    }
  };

  useEffect(() => {
    loadUser();
    AOS.init({ duration: 1000, once: true });
  }, []);
const navigate=useNavigate()
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login")
  };

  // const contextValue = useMemo(() => ({ user, setUser, logout }), [user]);

  return (
    <div>
      <AppState.Provider value={{ user, setUser, logout }}>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Index />} />
            <Route path="/PostJob" element={<PostJob />} />
            <Route path="/ManageJob" element={<ManageJob />} />
            <Route path="/ManageJob/:JobID" element={<UpdateJob />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Email />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="*" element={<Fouro4 />} />
          </Route>
          {/* Protected Admin Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="jobs" element={<Jobs />} />
          </Route>
          {/* Redirect based on user authentication */}
          {/* <Route path="/redirect" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/" />} /> */}
        </Routes>
      </AppState.Provider>
    </div>
  );
}

export default App;