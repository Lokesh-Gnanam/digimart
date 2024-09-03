import React from 'react';
import './styles/Dashboard.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="charts">
        <div className="chart-1">
          <img src='img3.png' />
        </div>
        <div className='chartV'>
        
        <div className="chart-2">
          <img src='img1.png' />
        </div>
        <div className="chart-3">
          <img src='img2.jpeg' />
          
        </div>
        </div>
        <div className="chart-4">
          <img src='graph.png' />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;