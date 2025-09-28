// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';

// export default function ProtectedRoute({ children }) {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) return <div>Loading...</div>;
//   if (!user) return <Navigate to="/login" replace />;
//   return children;
// }


// src/Components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // show a spinner or skeleton here
  }

  if (!user) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
