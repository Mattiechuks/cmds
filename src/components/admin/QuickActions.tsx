import React, { FC } from 'react';
import styles from './QuickActions.module.css';

const QuickActions: FC = () => {
  const handleAddUser = () => {
    alert('Add New Users action triggered.');
  };

  const handleManageRoles = () => {
    alert('Manage Roles action triggered.');
  };

  return (
    <div className={styles.quickActionsContainer}>
      <h2>Quick Actions</h2>
      <button className={styles.actionButton} onClick={handleAddUser}>Add New Users</button>
      <button className={styles.actionButton} onClick={handleManageRoles}>Managing Roles</button>
    </div>
  );
};

export default QuickActions;
