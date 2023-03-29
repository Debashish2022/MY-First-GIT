import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Payin from './pages/Payin/Payin';

// import DataTable from './pages/Table/Table';
// import Payout from './pages/Payout/Payout';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import AuthRoutes from "./components/AuthRoutes/AuthRoutes";
import NewPayin from "./components/NewPayin/NewPayin";
import PageNotFound from "./components/PageNotFound/PageNotFound";

export default function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new" element={<NewPayin />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

{
  /* <Route path="dashcontent" element={<DashboardContent />} /> */
}

{
  /* <Route path='payin' element={<Payin/>} />
          <Route path='payout' element={<Payout/>} /> */
}
