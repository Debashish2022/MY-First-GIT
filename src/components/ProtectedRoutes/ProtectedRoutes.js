import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getResellerToken } from '../../redux/Slice/userSlice';
import { useSelector } from 'react-redux';


export default function ProtectedRoutes() {
//   const isAuth = useAuth();
const Token = useSelector(getResellerToken);
    return Token ? <Outlet/> : <Navigate to="/" />;  
};
