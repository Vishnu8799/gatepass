import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage'
import { Navigate, Route, Routes } from 'react-router-dom';



function App() {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false)

  return (
    <div className="App">
     <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage onLogout={logout} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={login} />} />
      </Routes>
    </div>
  );
}

export default App;
