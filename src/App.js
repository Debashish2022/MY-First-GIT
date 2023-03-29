import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Patholab from "./pages/Patholab/Patholab";
import PatholabDetail from "./pages/PatholabDetail/PatholabDetail";
import UserList from "./pages/UserList/UserList";
import LoginAdminPanel from "./pages/LoginAdminPanel/LoginAdminPanel";
import { useDispatch, useSelector } from "react-redux";
import { isUserLogedIn } from "./Redux/Actions";
import Feedback from "./pages/Feedback/Feedback";
import Advertisement from "./pages/Advertisement/Advertisement";

import Career from "./pages/Career/Career";
import CareerEdit from "./pages/CareerEdit/CareerEdit";
import Aboutus from "./pages/Aboutus/Aboutus";
import AboutEdit from "./pages/Aboutus/AboutEdit";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import PrivacyPolicyEdit from "./pages/PrivacyPolicy/PrivacyPolicyEdit";
import Faq from "./pages/Faq/Faq";
import Faqeditpage from "./pages/Faqeditpage/Faqeditpage";
import Terms from "./pages/Terms/Terms";
import Termseditpage from "./pages/Termseditpage/Termseditpage";
import PromotionalDiscount from "./pages/PromotionalDiscount/PromotionalDiscount";
import PromotionalEdit from "./pages/PromotinalEdit/PromotionalEdit";
import EditPatholabDetailsModal from "./Component/EditPatholabDetailsModal/EditPatholabDetailsModal";

import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginAdminPanel />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="patholab" element={<Patholab />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="pathodetail" element={<PatholabDetail />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="advertisement" element={<Advertisement />} />
        {/* <Route path="discover" element={<Discover />} />
        <Route path="editDiscoverUs" element={<EditDiscoverUs />} /> */}
        <Route path="career" element={<Career />} />
        <Route path="careerEdit" element={<CareerEdit />} />
        {/* <Route path="faq" element={<Faq />} /> */}
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Abouteditus" element={<AboutEdit />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="PrivacyPolicyEdit" element={<PrivacyPolicyEdit />} />
        <Route path="faq" element={<Faq />} />
        <Route path="faqedit" element={<Faqeditpage />} />
        <Route path="terms" element={<Terms />} />
        <Route path="termseditpage" element={<Termseditpage />} />
        <Route path="promotionalpage" element={<PromotionalDiscount />} />
        <Route path="promotionaledit" element={<PromotionalEdit />} />
        <Route path="editpatholabdetails" element={<EditPatholabDetailsModal />} />

        {/* <Route path="whychooseus" element={<WhyChooseUs/>}/> */}
      </Routes>
    </>
  );
}
