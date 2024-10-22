import React from 'react';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CampaignCreation from './components/CampaignCreation';
import Analytics from './components/Analytics';
import Notifications from './components/Notifications';
// import UserManagement from './components/UserManagement';
import './App.css';
import Login from './components/Login';
import  {  Routes, Route, Link, Router } from 'react-router-dom';



const App = () => {
  
  

  return (
    <div className="app">
      
      <Header />
      
      <div className="main-content">
        <div className="page-content">
        <Router>

        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" Component={<Login />} />
          <Route path="/about" Component={<Dashboard />} />
          <Route path="/contact" Component={<CampaignCreation />} />
          <Route path="/contact" Component={<Analytics />} />
          <Route path="/contact" Component={<Notifications />} />
        </Routes>
        </div>
        </Router>

        </div>

      </div>
     
      
      
    </div>
  );
};

export default App;
