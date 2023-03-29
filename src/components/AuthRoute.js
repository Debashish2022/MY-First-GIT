import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function AuthRoute({children}) {
  const user = useSelector((state) => state.user);

  if(user.token) {
    return <Navigate to="/" replace />
  }
  return children;
}
