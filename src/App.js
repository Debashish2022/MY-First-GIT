import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userdetails from "./pages/UserDetails/Userdetails";
import Login from "./pages/Login/Login";
import Attendance from "./pages/AttendanceDetails/Attendance";
import Student_Analysis from "./pages/StudentAnalysis/Studentanalysis";
import StudentDetails from "./pages/StudentDetailsPagebackendDetails/Studentdetails";
// import Header1 from "./components/Header/Header1";
import Myprofile from "./pages/Myprofile/Myprofile";
import Veiwdetails from "./pages/Veiwdetails/Veiwdetails";
import Coursesunderme from "./pages/Coursesunderme/Coursesunderme";
import Dashboard from "./pages/Dashboard/Dashboard";
import Teacher from "./pages/Teacher/Teacher";
import HeaderNav from "./components/HeaderNav/HeaderNav";
export default function App() {
  return (
    <>
      <Router>
        <HeaderNav/>

        <Routes>
          {/* <Route path="/" element={<StudentDetails />} /> */}

          <Route path="/" element={<Login />} />
          <Route path="/userdetails" element={<Userdetails />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/studentanalysis" element={<Student_Analysis />} />
          <Route path="/studentdetails" element={<StudentDetails />} />
          <Route path="/myprofile"element={<Myprofile/>}/>
          <Route path="/veiwdetails"element={<Veiwdetails/>}/>
          <Route path="/coursesunderme"element={<Coursesunderme/>}/>
          <Route path="/dashboard"element={<Dashboard/>}/>
          <Route path="/teacher" element={<Teacher/>}/>
        </Routes>
      </Router>
    </>
  );
}
