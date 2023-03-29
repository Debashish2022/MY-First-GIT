import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../redux/Slice/userSlice";

export default function ProtectedRoutes() {
  const Token = useSelector(getToken);
  return Token ? <Outlet /> : <Navigate to="/" />;
}
