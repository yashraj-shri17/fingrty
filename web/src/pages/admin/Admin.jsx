import React, { useState } from 'react';
import AdminLogin from './AdminLogin.jsx';
import AdminDashboard from './AdminDashboard.jsx';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('fingrity_admin_token'));

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return <AdminDashboard />;
}
