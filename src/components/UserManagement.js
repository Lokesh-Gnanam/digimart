// import React from 'react';

// function UserManagement () {
//   return (
//     <div className="user-management">
//       <h2>User Management</h2>
//       <div className="user-list">
//         <p>User Management Details .....!</p>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;

import React, { useState } from "react";
import './styles/UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Manager" },
    { id: 3, name: "Charlie", role: "Viewer" }
  ]);

  const roles = ["Admin", "Manager", "Viewer"];

  const handleRoleChange = (id, newRole) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
