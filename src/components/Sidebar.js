import React from 'react';

const Sidebar = ({ selectPage }) => {
  return (
    <aside>
      <ul>
        <li onClick={() => selectPage('login')}>Login</li>
        <li onClick={() => selectPage('dashboard')}>Dashboard</li>
        <li onClick={() => selectPage('campaigns')}>Campaign Creation</li>
        <li onClick={() => selectPage('analytics')}>Analytics</li>
        <li onClick={() => selectPage('notifications')}>Notifications</li>
        {/* <li onClick={() => selectPage('userManagement')}>User Management</li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
