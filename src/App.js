import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import TestDashboard from "./pages/TestDashboard/TestDashboard";
import Canceltest from "./pages/Canceltest/Canceltest";
import Forgotpassword from "./pages/Forgetpassword/Forgotpassword";
import Labregistration from "./pages/Labregistration/Labregistration";
import Logout from "./pages/Logout/Logout";
import Welcomescreen from "./pages/Welcomescreen/Welcomescreen";
import Bookinghistory from "./pages/Bookinghistory/Bookinghistory";
import Waiting from "./pages/Waiting/Waiting";
import ReportGeneration from "./pages/ReportGeneration/ReportGeneration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddTestDetails from "./pages/AddTestDetails/AddTestDetails";
import { apicaller } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { isUserLogedIn } from "./Redux/Actions";
import ManageTestPage from "./pages/ManageTestPage/ManageTestPage";
import TestCategory from "./pages/TestCategory/TestCategory";
import ManageTestEdit from "./pages/ManageTestEdit/ManageTestEdit";
import Slots from "./pages/Slots/Slots";
import { ToastContainer } from "react-toastify";
import Patholabprofile from "./pages/PatholabProfile/Patholabprofile";
import EditTestDashboard from "./components/EditTestDashboard/EditTestDashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // console.log("Auth State in App.js is  :  ", auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogedIn());
    }
  }, []);

  return (
    <>
      {/* <Router> */}
      {/* <Header /> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Welcomescreen />} />
        <Route path="forgetpwd" element={<Forgotpassword />} />
        <Route path="labreg" element={<Labregistration />} />

        <Route path="home" element={<Home />} />
        <Route path="report" element={<ReportGeneration />} />
        <Route path="addtest" element={<AddTestDetails />} />
        {/* <Route path="managetest" element={<Managetest />} /> */}
        <Route path="testdash" element={<TestDashboard />} />
        <Route path="managetest" element={<ManageTestPage />} />
        <Route path="testCategory" element={<TestCategory />} />
        <Route path="testedit" element={<ManageTestEdit />} />
        <Route path="slots" element={<Slots />} />
        <Route path="myprofile" element={<Patholabprofile />} />
        <Route path="editLabTest" element={<EditTestDashboard />} />
      </Routes>
      {/* </Router> */}

      {/* <Logout/> */}
      {/* <Canceltest/> */}
      {/* <Waiting/> */}
      {/* <Bookinghistory/> */}
      {/* <EditTestDetails /> */}
    </>
  );
}
