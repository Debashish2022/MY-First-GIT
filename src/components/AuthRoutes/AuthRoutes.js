import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {  getTeacherToken } from '../../redux/Slice/userSlice';
import { useSelector } from "react-redux";

export default function AuthRoutes() {
  const Token = useSelector(getTeacherToken);

  return Token ? <Navigate to="/dash" /> : <Outlet />;
}
