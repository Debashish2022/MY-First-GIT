import React from "react";
import { getUserToken } from "../Redux/Slice/UserSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const token = useSelector(getUserToken);

    return token ? <Outlet /> : <Navigate to="/login" />
}

