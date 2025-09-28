
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Pages/Home';

function App() {
 

  return (
    <>
     
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Login />} />
        </Routes>
     
    </>
  )
}

export default App
