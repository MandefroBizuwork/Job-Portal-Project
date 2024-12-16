import "./Css/bootstrap-5/css/bootstrap.min.css";

import "./Css/font-awesome-4.7/css/font-awesome.min.css";
import "./Css/mystyle.css";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Pages/Main/Index";
import Header from "./components/Pages/SharedLayout/Header/Header";
import Register from "./components/Pages/UserPage/Register";
import Login from "./components/Pages/UserPage/Login";
import Footer from "./components/Pages/SharedLayout/Footer/Footer";
import CommonLayout from "./components/Pages/SharedLayout/CommonLayout";
import Fouro4 from "./components/ErorrPage/Fouro4";
import PostJob from "./components/Pages/JobPage/PostJob";
import ManageJob from "./components/Pages/JobPage/ManageJob";
import UpdateJob from "./components/Pages/JobPage/UpdateJob";
import ImageUpload from "./components/UserProfile/ImageUpload";
import Email from "./components/Confirmaion/Email";

import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Dashboard from "./components/Pages/DashBoard/Dashboard";
import 'aos/dist/aos.css'; // AOS Styles
import AOS from 'aos'; // AOS JavaScript
import { useEffect } from "react";
import Documents from "./components/Documents/Documents";
import DashRout from "./components/Pages/DashBoard/Jobs";
import Profile from "./components/Pages/DashBoard/Profile";
import AdminLayout from "./components/Pages/DashBoard/AdminLayout/AdminLayout";
import Jobs from "./components/Pages/DashBoard/Jobs";

function App() {
  useEffect(() => {
    // Initialize AOS after the component mounts
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Run the animation only once
    });
  }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/PostJob/" element={<PostJob />} />
          <Route path="/ManageJob/" element={<ManageJob />} />
          <Route path="/ManageJob/:JobID" element={<UpdateJob />} />
          <Route path="/Register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/contact/" element={<Email />} />
          <Route path="/documents/" element={<Documents/>} />
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
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="jobs" element={<Jobs/>} />

        </Route>

    
      </Routes>

      {/* 
      <ImageUpload/> */}

      {/* <SendSMS/> */}

    </div>
  );
}
export default App;
