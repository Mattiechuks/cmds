import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/common/Sidebar';
import SidebarItem from '@/components/common/SidebarItem';
import ProfileIcon from '@/components/common/ProfileIcon';
import OverviewPanel from '@/components/admin/OverviewPanel';
import RecentActivity from '@/components/admin/RecentActivity';
import UserActivity from '@/components/admin/UserActivity';
import QuickActions from '@/components/admin/QuickActions';
import Reports from '@/components/admin/Reports';
import TopRightIcons from '@/components/common/TopRightIcons';
import styles from '@/AdminDashboard.module.css';

const AdminDashboard: FC = () => {
  const [profile, setProfile] = useState({ name: '', profilePicture: '' });

  useEffect(() => {
    axios.get('/api/users/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src={profile.profilePicture} alt={`${profile.name}'s Photo`} />
        <SidebarItem href="/admin-dashboard"><span className={styles.clicked}>Dashboard</span></SidebarItem>
        <SidebarItem href="/admin-dashboard/user-management">User Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/material-management">Material Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/reports">Reports & Statistics</SidebarItem>
        <SidebarItem href="/admin-dashboard/switch-views">Switch Views</SidebarItem>
        <SidebarItem href="/admin-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <h1>DASHBOARD</h1>
        <OverviewPanel />
        <RecentActivity />
        <UserActivity />
        <QuickActions />
        <Reports />
      </div>
    </div>
  );
};

export default AdminDashboard;
