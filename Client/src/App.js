import "./Css/bootstrap-5/css/bootstrap.min.css";
import "./Css/font-awesome-4.7/css/font-awesome.min.css";
import "./Css/mystyle.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import AOS from "aos"; // AOS JavaScript

// Import Components
import Index from "./components/Pages/Main/Index";
import Register from "./components/Pages/UserPage/Register";
import Login from "./components/Pages/UserPage/Login";
import CommonLayout from "./components/Pages/SharedLayout/CommonLayout";
import Fouro4 from "./components/ErorrPage/Fouro4";
import PostJob from "./components/Pages/JobPage/PostJob";
import ManageJob from "./components/Pages/JobPage/ManageJob";
import Email from "./components/Confirmaion/Email";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Documents from "./components/Documents/Documents";
import Profile from "./components/Pages/DashBoard/maincontainer/Profile";
import AdminLayout from "./components/Pages/DashBoard/AdminLayout/AdminLayout";
import Jobs from "./components/Pages/DashBoard/maincontainer/Jobs";
import DashboardPage from "./components/Pages/DashBoard/maincontainer/DashboardPage";
import RedirectingAuthenticated from "./components/Auth/RedirectingAuthenticated";
import Vacancy from "./components/Pages/JobPage/Vacancy";
import CustomerPage from "./components/Pages/UserPage/CustomerPage";
import UserList from "./components/Pages/DashBoard/maincontainer/UserList";

export const AppState = createContext();

function App() {
  const [user, setUser] = useState(null);
  const token = window.localStorage.getItem("token");
  const loadUser = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/user/checkuser", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error("Failed to fetch user:", response.status);
        localStorage.removeItem("token");
        navigate("/login");
        setUser(null);
      }
    } catch (error) {
      console.error(
        "Error during authentication:",
        error.response?.data || error.message
      );
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  useEffect(() => {
    loadUser();
    AOS.init({ duration: 1000, once: true });
  }, [token]);
  const navigate = useNavigate();
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  // const contextValue = useMemo(() => ({ user, setUser, logout }), [user]);
  console.log(user);
  return (
    <div>
      <AppState.Provider value={{ user, setUser, logout }}>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Index />} />
            <Route path="Vacancy" element={<Vacancy />} />

            <Route path="/PostJob" element={<PostJob />} />
            <Route
              path="/ManageJob"
              element={
                <ProtectedRoute
                  redirectPath="/login"
                  isAllowed={!!user && user.role.includes("admin")}
                >
                  <ManageJob />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/ManageJob/:JobID" element={<UpdateJob />} /> */}
            <Route
              path="/Register"
              element={
                <RedirectingAuthenticated>
                  <Register />
                </RedirectingAuthenticated>
              }
            />
            <Route
              path="/login"
              element={
                <RedirectingAuthenticated>
                  <Login />
                </RedirectingAuthenticated>
              }
            />

            <Route path="/contact" element={<Email />} />
            <Route
              path="/documents"
              element={
                <ProtectedRoute
                  redirectPath="/login"
                  isAllowed={!!user && user.role.includes("admin")}
                >
                  <Documents />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Fouro4 />} />
          </Route>
          {/* Protected Admin Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                redirectPath="/login"
                isAllowed={!!user && user.role.includes("admin")}
              >
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="usersPage" element={<UserList />} />
  
          </Route>
          <Route
            path="/customer"
            element={
              <ProtectedRoute
                redirectPath="/login"
                isAllowed={!!user && user.role.includes("customer")}
              >
                <CustomerPage />
              </ProtectedRoute>
            }
          />

          {/* Redirect based on user authentication */}
          {/* <Route path="/redirect" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/" />} /> */}
        </Routes>
      </AppState.Provider>
    </div>
  );
}

export default App;
