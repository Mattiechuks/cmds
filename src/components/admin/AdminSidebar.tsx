import React, { FC } from 'react';
import SidebarItem from '../common/SidebarItem';
import styles from './AdminSidebar.module.css';

const AdminSidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarItem href="/admin-dashboard"><span className={styles.clicked}>Dashboard</span></SidebarItem>
      <SidebarItem href="/admin-dashboard/user-management">User Management</SidebarItem>
      <SidebarItem href="/admin-dashboard/material-management">Material Management</SidebarItem>
      <SidebarItem href="/admin-dashboard/reports">Reports & Statistics</SidebarItem>
      <SidebarItem href="/admin-dashboard/switch-views">Switch Views</SidebarItem>
      <SidebarItem href="/admin-dashboard/settings">Settings</SidebarItem>
      <SidebarItem href="/login">Log Out</SidebarItem>
    </div>
  );
};

export default AdminSidebar;
