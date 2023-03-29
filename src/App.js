import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header1 from "./components/Header/Header1";

import Dashboard from "./pages/Dashboard/Dashboard";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Star_Component from "./components/StarComponent/StarComponent";

import Help from "./pages/Help/Help";
import TeacherRegister from "./pages/TeacherRegister/TeacherRegister";
import MyProfile from "./pages/Myprofile/Myprofile";

import CourseSetup from "./pages/CourseSetup/CourseSetup";
import MyAllCourses from "./pages/MyAllCourses/MyAllCourses";
import Revenue from "./pages/Revenue/Revenue";
import EnrolledStudents from "./pages/EnrolledStudents/EnrolledStudents";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import AuthRoutes from "./components/AuthRoutes/AuthRoutes";


export default function App() {
  return (
    <>
      <Router>
        {/* <Header1 /> */}
        {/* <HeaderNav /> */}
        <ToastContainer />
        <Routes>
        <Route element={<AuthRoutes />}>
         
          <Route path="/" element={<Login />} />
          <Route path="teacherreg" element={<TeacherRegister />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
          <Route path="dash" element={<Dashboard />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="courses" element={<MyAllCourses />} />
          {/* <Route path="coursetup" element={<CourseSetup />} /> */}
          <Route path="help" element={<Help />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="enrolled" element={<EnrolledStudents />} />
          <Route path="coursedetails" element={<CourseDetails />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}
