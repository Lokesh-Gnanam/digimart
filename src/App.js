import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CampaignCreation from './components/CampaignCreation';
import Analytics from './components/Analytics';
import Notifications from './components/Notifications';
import UserManagement from './components/UserManagement';
import './App.css';
import Login from './components/Login';



const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {

      case 'dashboard':
        return <Dashboard />;
      case 'campaigns':
        return <CampaignCreation />;
      case 'analytics':
        return <Analytics />;
      case 'notifications':
        return <Notifications />;
      case 'userManagement':
        return <UserManagement />;
      case 'login':
        return <Login />;  
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
       {/* <Sample/> */}
      <Header />
      
      <div className="main-content">
        <Sidebar selectPage={setCurrentPage} />
        <div className="page-content">
          {renderPage()}
        </div>

      </div>
      {/* <Login/> */}
      
      
    </div>
  );
};

export default App;
