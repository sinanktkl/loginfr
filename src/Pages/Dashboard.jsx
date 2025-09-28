import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name || user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
