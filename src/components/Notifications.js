import React from 'react';
import './styles/Notifications.css';

const Notifications = () => {
  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <ul>
        <li>Great job! The engagement rate for 'Back-to-School Promo' has exceeded 10%.</li>
        <li>Congratulations! Your campaign 'Holiday Sale 2024' has reached 500,000 impressions.</li>
        <li>Alert: The budget for 'New Product Launch' is 85% utilized. Consider reviewing your spending strategy</li>
        <li>Success! The ROI for 'Cyber Monday Deals' has surpassed 200%, indicating a highly profitable campaign.</li>
        <li>Alert: The conversion rate for 'Spring Clearance Event' has dropped below 2%. Investigate potential issues</li>
        {/* Add more notifications */}
      </ul>
    </div>
  );
};

export default Notifications;
