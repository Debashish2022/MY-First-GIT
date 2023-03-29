// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";

import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/User/User";
import Sponsorship from "./pages/Sponsorship/Sponsorship";
import About from "./pages/About/About";
import Govpay from "./pages/Govpay/Govpay";
import Billpay from "./pages/Billpay/Billpay";
import Helpcenter from "./pages/Helpcenter/Helpcenter";
import Alltransaction from "./pages/Alltransaction/Alltransaction";
import Queries from "./pages/Queries/Queries";
import Offer from "./pages/Offer/Offer";
import Sidebar from "./components/SideBar/Sidebar";
import Water from "./pages/Water/Water";
import Light from "./pages/Light/Light";
import Dth from "./pages/Dth/Dth";

import Login from "./pages/Login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>

        <Sidebar>
          <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="sponsorship" element={<Sponsorship />} />
            <Route path="about" element={<About />} />
            <Route path="/govpay" element={<Govpay />} />
            <Route path="/billpay" element={<Billpay />} />
            <Route path="/helpcenter" element={<Helpcenter />} />
            <Route path="/alltransaction" element={<Alltransaction />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/water" element={<Water />} />
            <Route path="/light" element={<Light />} />
            <Route path="/dth" element={<Dth />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
      {/* <Login/> */}
    </>
  );
}

export default App;
