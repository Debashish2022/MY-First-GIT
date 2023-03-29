import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile/Profile";
import Account from "./components/Account/Account";
import Payin from "./components/Payin/Payin";
import Payout from "./components/Payout/Payout";
import AuthRoute from "./components/AuthRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Resellers from "./components/Resellers/Resellers";
import ResellersAppRej from "./components/ResellerAppRej/ResellersAppRej";
import UpdateResellerModal from "./components/UpdateResellerDataModal/UpdateResellerModal";
import UserProfileAccount from "./pages/UserProfileAccount/UserProfileAccount";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/" element={<Login />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dash" element={<Dashboard />} />
            {/* <Route path="/profile" element={<UserProfileAccount />} /> */}
            {/* <Route path="/account" element={<Account />} /> */}
            {/* <Route path="/payin" element={<Payin />} />
            <Route path="/payout" element={<Payout />} /> */}
            <Route path="/resellers" element={<Resellers />} />
            <Route path="/updatereseller" element={<UpdateResellerModal />} />
            <Route path="/profileaccount" element={<UserProfileAccount />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
