import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import GeneralSettings from '../../components/admin/GeneralSettings';
import UserRoles from '../../components/admin/UserRoles';
import SecuritySettings from '../../components/admin/SecuritySettings';
import TopRightIcons from '../../components/common/TopRightIcons';
import styles from './Settings.module.css';

const Settings: FC = () => {
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
        <SidebarItem href="/admin-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/admin-dashboard/user-management">User Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/material-management">Material Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/reports">Reports & Statistics</SidebarItem>
        <SidebarItem href="/admin-dashboard/switch-views">Switch Views</SidebarItem>
        <SidebarItem href="/admin-dashboard/settings"><span className={styles.clicked}>Settings</span></SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <GeneralSettings />
        <UserRoles />
        <SecuritySettings />
      </div>
    </div>
  );
};

export default Settings;
