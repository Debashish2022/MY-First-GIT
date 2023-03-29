import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getResellerToken } from '../../redux/Slice/userSlice';
import { useSelector } from "react-redux";

export default function AuthRoutes() {
  const Token = useSelector(getResellerToken);

  return Token ? <Navigate to="/dashboard" /> : <Outlet />;
}
