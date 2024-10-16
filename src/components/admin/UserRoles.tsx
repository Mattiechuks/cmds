import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserRoles.module.css';

interface Role {
  id: number;
  roleName: string;
  numberOfUsers: number;
  permissions: string;
}

const UserRoles: FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    axios.get('/api/roles')
      .then(response => setRoles(response.data))
      .catch(error => console.error('Error fetching roles:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h2>User Roles & Permissions</h2>
      <button className={styles.createRoleButton}>Create New Role</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Number of Users</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.roleName}</td>
              <td>{role.numberOfUsers}</td>
              <td>{role.permissions}</td>
              <td>
                <button className={styles.actionButton}>Edit</button>
                <button className={styles.actionButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRoles;
